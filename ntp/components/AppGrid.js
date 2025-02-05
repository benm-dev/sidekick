class AppGrid {
  constructor(launchpadService) {
    this.launchpadService = launchpadService;
    this.element = document.createElement('div');
    this.element.className = 'app-grid';
  }

  async render() {
    const apps = this.launchpadService.getApps();
    
    this.element.innerHTML = apps.map(app => `
      <div class="app-item" data-app-id="${app.id}">
        <img src="${app.icons[0].url}" alt="${app.name}">
        <span>${app.name}</span>
      </div>
    `).join('');

    this.attachEventListeners();
    return this.element;
  }

  attachEventListeners() {
    this.element.addEventListener('click', async (e) => {
      const appItem = e.target.closest('.app-item');
      if (!appItem) return;

      const appId = appItem.dataset.appId;
      await this.launchpadService.launchApp(appId);
    });
  }
}
