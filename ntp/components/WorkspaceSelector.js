singclass WorkspaceSelector {
  constructor(launchpadService) {
    this.launchpadService = launchpadService;
    this.element = document.createElement('div');
    this.element.className = 'workspace-selector';
  }

  async render() {
    const workspaces = this.launchpadService.getWorkspaces();
    
    this.element.innerHTML = `
      <select class="workspace-select">
        ${workspaces.map(workspace => `
          <option value="${workspace.id}">${workspace.name}</option>
        `).join('')}
      </select>
    `;

    return this.element;
  }
}
