class EdgeBrowserService {
  async getWorkspaces() {
    return await browser.workspaces.getAll();
  }

  async createWorkspace(properties) {
    return await browser.workspaces.create(properties);
  }

  async updateWorkspace(id, properties) {
    return await browser.workspaces.update(id, properties);
  }

  async removeWorkspace(id) {
    return await browser.workspaces.remove(id);
  }

  // Tab Management
  async createTab(properties) {
    return await browser.tabs.create(properties);
  }

  async updateTab(tabId, properties) {
    return await browser.tabs.update(tabId, properties);
  }

  async getTabs(queryInfo) {
    return await browser.tabs.query(queryInfo);
  }

  // Window Management
  async createWindow(properties) {
    return await browser.windows.create(properties);
  }

  async getAllWindows(getInfo) {
    return await browser.windows.getAll(getInfo);
  }

  async updateWindow(windowId, updateInfo) {
    return await browser.windows.update(windowId, updateInfo);
  }

  // Browser Events
  onTabCreated(callback) {
    browser.tabs.onCreated.addListener(callback);
  }

  onTabRemoved(callback) {
    browser.tabs.onRemoved.addListener(callback);
  }

  onTabUpdated(callback) {
    browser.tabs.onUpdated.addListener(callback);
  }

  onWindowCreated(callback) {
    browser.windows.onCreated.addListener(callback);
  }

  onWindowRemoved(callback) {
    browser.windows.onRemoved.addListener(callback);
  }

  // Extension Management
  async getExtensionInfo() {
    return await browser.management.getSelf();
  }

  async getPermissions() {
    return await browser.permissions.getAll();
  }

  // Workspace Event Handlers
  onWorkspaceCreated(callback) {
    browser.workspaces.onCreated.addListener(callback);
  }

  onWorkspaceRemoved(callback) {
    browser.workspaces.onRemoved.addListener(callback);
  }

  onWorkspaceUpdated(callback) {
    browser.workspaces.onUpdated.addListener(callback);
  }
}