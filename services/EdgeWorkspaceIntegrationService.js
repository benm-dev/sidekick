class EdgeWorkspaceIntegrationService {
  constructor(edgeWorkspaceService, edgeStorageService) {
    this.workspaceService = edgeWorkspaceService;
    this.storageService = edgeStorageService;
  }

  async integrateAppWithWorkspace(app, workspaceId) {
    const workspace = await this.workspaceService.getWorkspace(workspaceId);
    if (!workspace) return;

    // Handle app integration with Edge workspace
    const edgeApp = {
      title: app.name,
      url: app.url,
      icon: app.icon,
      id: app.id
    };

    // Store app data
    await this.storageService.setLocal({
      [`workspace_${workspaceId}_app_${app.id}`]: edgeApp
    });

    // Add to workspace
    await this.workspaceService.updateWorkspace(workspaceId, {
      apps: [...(workspace.apps || []), edgeApp]
    });
  }

  async removeAppFromWorkspace(app, workspaceId) {
    const workspace = await this.workspaceService.getWorkspace(workspaceId);
    if (!workspace) return;

    // Remove app data
    await this.storageService.removeLocal(`workspace_${workspaceId}_app_${app.id}`);

    // Update workspace
    const updatedApps = (workspace.apps || []).filter(a => a.id !== app.id);
    await this.workspaceService.updateWorkspace(workspaceId, {
      apps: updatedApps
    });
  }

  async getWorkspaceApps(workspaceId) {
    const workspace = await this.workspaceService.getWorkspace(workspaceId);
    if (!workspace) return [];
    return workspace.apps || [];
  }

  async syncWorkspaceApps(workspaceId) {
    const apps = await this.getWorkspaceApps(workspaceId);
    const data = await this.storageService.getLocal();
    
    // Sync stored apps with workspace apps
    const storedApps = Object.entries(data)
      .filter(([key]) => key.startsWith(`workspace_${workspaceId}_app_`))
      .map(([_, value]) => value);

    // Update workspace with merged apps
    const mergedApps = [...new Map([...apps, ...storedApps].map(app => [app.id, app])).values()];
    await this.workspaceService.updateWorkspace(workspaceId, {
      apps: mergedApps
    });

    return mergedApps;
  }
}