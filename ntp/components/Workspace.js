export class Workspace {
  constructor(workspace, workspaceService) {
    this.workspace = workspace;
    this.workspaceService = workspaceService;
  }

  render() {
    const { id, name, apps, isActive } = this.workspace;
    return `
      <div class="workspace ${isActive ? 'active' : ''}" data-workspace-id="${id}">
        <div class="workspace-header">
          <h2 class="workspace-name">${name}</h2>
          <div class="workspace-actions">
            <button class="minimize-workspace">
              <span class="icon minimize"></span>
            </button>
            <button class="workspace-menu">
              <span class="icon menu"></span>
            </button>
          </div>
        </div>
        <div class="workspace-apps">
          ${this.renderApps(apps)}
        </div>
      </div>
    `;
  }

  renderApps(apps) {
    return apps.map(app => `
      <div class="app-item" data-app-id="${app.id}">
        <div class="app-icon">
          <img src="${app.icon}" alt="${app.name} icon">
        </div>
        <span class="app-name">${app.name}</span>
      </div>
    `).join('');
  }

  handleAppClick(appId) {
    const app = this.workspace.apps.find(a => a.id === appId);
    if (app) {
      this.workspaceService.launchpadService.openApp(app);
    }
  }
}