class Tabs {
  static DEFAULT_ACTIVE_INDEX = 0;
  static TABS_NAV_ITEM = 'button';
  static TABS_CONTENT_ITEM = 'div';

  constructor(rootEl, defaultActiveIndex = Tabs.DEFAULT_ACTIVE_INDEX) {
    this.rootEl = rootEl;
    this.navItems = Array.from(rootEl.querySelector('nav').children);
    this.contentItems = Array.from(rootEl.querySelector('div').children);

    this.bindEvents();
    this.activateTab(defaultActiveIndex);
  }

  bindEvents() {
    this.navItems.forEach((navItem, index) => {
      navItem.addEventListener('click', () => this.activateTab(index));
    });
  }

  activateTab(index) {
    // Remove active class from all tabs and contents
    this.navItems.forEach(item => item.classList.remove('active'));
    this.contentItems.forEach(item => item.classList.remove('active'));

    // Add active class to the selected tab and its content
    this.navItems[index].classList.add('active');
    this.contentItems[index].classList.add('active');
  }
}
