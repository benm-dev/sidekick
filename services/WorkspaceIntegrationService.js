class WorkspaceIntegrationService {
  constructor(edgeWorkspaceService) {
    this.edgeWorkspaceService = edgeWorkspaceService;
  }

  async syncWorkspaces(workspaces) {
    // Get current Edge workspaces
    const edgeWorkspaces = this.edgeWorkspaceService.getAllWorkspaces();
    const edgeWorkspaceMap = new Map(edgeWorkspaces.map(w => [w.name, w]));
    
    // Sync each workspace
    for (const workspace of workspaces) {
      const edgeWorkspace = edgeWorkspaceMap.get(workspace.name);
      
      if (!edgeWorkspace) {
        // Create new workspace in Edge
        await this.edgeWorkspaceService.createWorkspace(
          workspace.name,
          workspace.icon
        );
      } else if (workspace.icon !== edgeWorkspace.icon) {
        // Update existing workspace if icon changed
        await this.edgeWorkspaceService.updateWorkspace(
          edgeWorkspace.id,
          { icon: workspace.icon }
        );
      }
    }
  }

  async getWorkspaceForTab(tabId) {
    const workspaces = await this.edgeWorkspaceService.getAllWorkspaces();
    return workspaces.find(workspace => {
      const tabs = workspace.tabs || [];
      return tabs.some(tab => tab.id === tabId);
    });
  }

  async switchToWorkspace(workspaceId) {
    await this.edgeWorkspaceService.switchToWorkspace(workspaceId);
  }

  async createWorkspace(name, icon) {
    return await this.edgeWorkspaceService.createWorkspace(name, icon);
  }

  async deleteWorkspace(id) {
    await this.edgeWorkspaceService.deleteWorkspace(id);
  }

  async moveTabToWorkspace(tabId, workspaceId) {
    await browser.tabs.update(tabId, { workspaceId });
  }

  async launchAppInWorkspace(workspaceId, app) {
    return await this.edgeWorkspaceService.launchAppInWorkspace(workspaceId, app);
  }
}