class EdgeWorkspaceService {
  constructor() {
    this.workspaces = new Map();
  }

  async init() {
    try {
      const workspaces = await browser.workspaces.getAll();
      workspaces.forEach(workspace => {
        this.workspaces.set(workspace.id, workspace);
      });
    } catch (err) {
      console.error('Failed to get Edge workspaces:', err);
    }
  }

  async createWorkspace(name, icon) {
    try {
      const workspace = await browser.workspaces.create({
        name,
        icon
      });
      this.workspaces.set(workspace.id, workspace);
      return workspace;
    } catch (err) {
      console.error('Failed to create workspace:', err);
      throw err;
    }
  }

  async deleteWorkspace(id) {
    try {
      await browser.workspaces.remove(id);
      this.workspaces.delete(id);
    } catch (err) {
      console.error('Failed to delete workspace:', err);
      throw err;
    }
  }

  async switchToWorkspace(id) {
    const workspace = this.workspaces.get(id);
    if (!workspace) return;
    try {
      await browser.workspaces.activate(id);
    } catch (err) {
      console.error('Failed to switch workspace:', err);
    }
  }

  async updateWorkspace(id, properties) {
    try {
      const workspace = await browser.workspaces.update(id, properties);
      this.workspaces.set(workspace.id, workspace);
      return workspace;
    } catch (err) {
      console.error('Failed to update workspace:', err);
      throw err;
    }
  }

  async launchAppInWorkspace(workspaceId, app) {
    const workspace = this.workspaces.get(workspaceId);
    if (!workspace) return;
    
    try {
      await browser.workspaces.activate(workspaceId);
      return await browser.tabs.create({
        url: app.url,
        workspaceId: workspaceId
      });
    } catch (err) {
      console.error('Failed to launch app in workspace:', err);
    }
  }

  getWorkspace(id) {
    return this.workspaces.get(id);
  }

  getAllWorkspaces() {
    return Array.from(this.workspaces.values());
  }
}
