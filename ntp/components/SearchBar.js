export class SearchBar {
  constructor(searchService) {
    this.searchService = searchService;
    this.searchResults = [];
    this.activeIndex = -1;
  }

  render() {
    return `
      <div class="search-container">
        <div class="search-input-wrapper">
          <span class="search-icon"></span>
          <input 
            type="text" 
            class="search-input" 
            placeholder="Search tabs, apps, bookmarks..."
            aria-label="Search tabs, apps, bookmarks"
          >
          <div class="search-shortcuts">⌘ + K</div>
        </div>
        ${this.renderSearchResults()}
      </div>
    `;
  }

  renderSearchResults() {
    if (!this.searchResults.length) return '';
    
    return `
      <div class="search-results">
        ${this.searchResults.map((result, index) => `
          <div class="search-result ${index === this.activeIndex ? 'active' : ''}" 
               data-result-id="${result.id}">
            <img src="${result.icon}" class="result-icon" alt="">
            <div class="result-info">
              <div class="result-title">${result.title}</div>
              <div class="result-url">${result.url}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  async handleSearch(query) {
    if (!query) {
      this.searchResults = [];
      this.activeIndex = -1;
      return;
    }

    this.searchResults = await this.searchService.searchGlobally({
      text: query,
      maxResults: 20
    });
    
    this.activeIndex = this.searchResults.length ? 0 : -1;
  }

  handleKeyNavigation(event) {
    if (!this.searchResults.length) return;

    switch(event.key) {
      case 'ArrowDown':
        this.activeIndex = Math.min(this.activeIndex + 1, this.searchResults.length - 1);
        break;
      case 'ArrowUp':
        this.activeIndex = Math.max(this.activeIndex - 1, 0);
        break;
      case 'Enter':
        if (this.activeIndex >= 0) {
          this.handleResultSelect(this.searchResults[this.activeIndex]);
        }
        break;
    }
  }

  handleResultSelect(result) {
    this.searchService.openSearchItem({
      item: result,
      source: 'ntp-search'
    });
  }
}