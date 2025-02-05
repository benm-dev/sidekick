// Edge New Tab Page Integration
class EdgeNTP {
  constructor(edgeWorkspaceService, edgeBrowserService, launchpadService) {
    this.workspaceService = edgeWorkspaceService;
    this.browserService = edgeBrowserService;
    this.launchpadService = launchpadService;
  }

  async initialize() {
    await this.loadWorkspaces();
    this.setupWorkspaceListeners();
  }

  async loadWorkspaces() {
    const workspaces = await this.workspaceService.getAllWorkspaces();
    return this.transformWorkspaces(workspaces);
  }

  transformWorkspaces(workspaces) {
    return workspaces.map(workspace => ({
      id: workspace.id,
      name: workspace.name,
      icon: workspace.icon,
      apps: workspace.apps || [],
      isActive: workspace.isActive || false
    }));
  }

  setupWorkspaceListeners() {
    // Listen for workspace changes
    browser.workspaces.onCreated.addListener(workspace => {
      this.handleWorkspaceCreated(workspace);
    });

    browser.workspaces.onRemoved.addListener(workspaceId => {
      this.handleWorkspaceRemoved(workspaceId);
    });

    browser.workspaces.onUpdated.addListener((workspaceId, changeInfo) => {
      this.handleWorkspaceUpdated(workspaceId, changeInfo);
    });
  }

  async handleWorkspaceCreated(workspace) {
    await this.workspaceService.syncWorkspaces([workspace]);
  }

  async handleWorkspaceRemoved(workspaceId) {
    await this.workspaceService.deleteWorkspace(workspaceId);
  }

  async handleWorkspaceUpdated(workspaceId, changeInfo) {
    await this.workspaceService.updateWorkspace(workspaceId, changeInfo);
  }

  // App management in workspaces
  async addAppToWorkspace(workspaceId, app) {
    await this.launchpadService.addAppToWorkspace(workspaceId, app);
  }

  async removeAppFromWorkspace(workspaceId, appId) {
    await this.launchpadService.removeAppFromWorkspace(workspaceId, appId);
  }

  async switchToWorkspace(workspaceId) {
    await this.workspaceService.switchToWorkspace(workspaceId);
  }
}