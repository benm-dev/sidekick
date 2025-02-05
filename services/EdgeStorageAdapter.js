class EdgeStorageAdapter {
  static QUOTA_BYTES = 5242880; // 5MB Edge storage limit

  constructor(storageService) {
    this.storageService = storageService;
  }

  async get(keys = null) {
    try {
      return await this.storageService.getLocal(keys);
    } catch (error) {
      console.error('Edge storage get error:', error);
      return {};
    }
  }

  async set(items) {
    // Check storage quota before setting
    const size = await this.getBytesInUse();
    const newSize = size + this.calculateStorageSize(items);
    
    if (newSize > EdgeStorageAdapter.QUOTA_BYTES) {
      throw new Error('Edge storage quota exceeded');
    }

    try {
      await this.storageService.setLocal(items);
    } catch (error) {
      console.error('Edge storage set error:', error);
      throw error;
    }
  }

  async remove(keys) {
    try {
      await this.storageService.removeLocal(keys);
    } catch (error) {
      console.error('Edge storage remove error:', error);
      throw error;
    }
  }

  async clear() {
    try {
      await this.storageService.clearLocal();
    } catch (error) {
      console.error('Edge storage clear error:', error);
      throw error;
    }
  }

  async getBytesInUse(keys = null) {
    try {
      return await this.storageService.getLocalSize(keys);
    } catch (error) {
      console.error('Edge storage size check error:', error);
      return 0;
    }
  }

  private calculateStorageSize(items) {
    return new Blob([JSON.stringify(items)]).size;
  }
}