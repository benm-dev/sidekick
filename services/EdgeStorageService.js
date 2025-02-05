class EdgeStorageService {
  constructor(browserService) {
    this.browserService = browserService;
  }

  // Local Storage Methods
  async getLocal(keys = null) {
    return await browser.storage.local.get(keys);
  }

  async setLocal(items) {
    return await browser.storage.local.set(items);
  }

  async removeLocal(keys) {
    return await browser.storage.local.remove(keys);
  }

  async clearLocal() {
    return await browser.storage.local.clear();
  }

  // Sync Storage Methods  
  async getSync(keys = null) {
    return await browser.storage.sync.get(keys);
  }

  async setSync(items) {
    return await browser.storage.sync.set(items);
  }

  async removeSync(keys) {
    return await browser.storage.sync.remove(keys);
  }

  async clearSync() {
    return await browser.storage.sync.clear();
  }

  // Storage Size Methods
  async getLocalSize(keys = null) {
    return await browser.storage.local.getBytesInUse(keys);
  }

  async getSyncSize(keys = null) {
    return await browser.storage.sync.getBytesInUse(keys);
  }

  // Storage Change Listener
  addStorageListener(callback) {
    browser.storage.onChanged.addListener((changes, areaName) => {
      callback(changes, areaName);
    });
  }
}