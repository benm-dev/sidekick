class LaunchpadService {
  constructor(edgeWorkspaceService, edgeBrowserService) {
    this.workspaceService = edgeWorkspaceService;
    this.browserService = edgeBrowserService;
  }

  async initWorkspaces() {
    await this.workspaceService.init();
  }

  async getApps() {
    const workspace = await this.getCurrentWorkspace();
    return workspace ? workspace.apps : [];
  }

  async getCurrentWorkspace() {
    const windows = await this.browserService.getAllWindows({ 
      windowTypes: ['normal']
    });
    const currentWindow = windows.find(w => w.focused);
    if (!currentWindow?.workspaceId) return null;
    
    return this.workspaceService.getWorkspace(currentWindow.workspaceId);
  }

  async launchApp(appId) {
    const workspace = await this.getCurrentWorkspace();
    if (!workspace) return;

    const app = workspace.apps.find(a => a.id === appId);
    if (!app) return;

    await this.workspaceService.launchAppInWorkspace(workspace.id, app);
  }

  // Workspace Management
  async addAppToWorkspace(workspaceId, app) {
    const workspace = this.workspaceService.getWorkspace(workspaceId);
    if (!workspace) return;

    // Add app to workspace's app list
    workspace.apps = workspace.apps || [];
    workspace.apps.push(app);

    await this.workspaceService.updateWorkspace(workspaceId, {
      apps: workspace.apps
    });
  }

  async removeAppFromWorkspace(workspaceId, appId) {
    const workspace = this.workspaceService.getWorkspace(workspaceId);
    if (!workspace) return;

    workspace.apps = (workspace.apps || []).filter(a => a.id !== appId);
    
    await this.workspaceService.updateWorkspace(workspaceId, {
      apps: workspace.apps
    });
  }

  // Workspace Event Handlers
  onWorkspaceCreated(callback) {
    this.browserService.onWorkspaceCreated(callback);
  }

  onWorkspaceRemoved(callback) {
    this.browserService.onWorkspaceRemoved(callback);
  }

  onWorkspaceUpdated(callback) {
    this.browserService.onWorkspaceUpdated(callback);
  }
}
