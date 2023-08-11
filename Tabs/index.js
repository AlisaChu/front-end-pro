class Tabs {
  static DEFAULT_ACTIVE_INDEX = 0;
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

    this.navItems.forEach(item => item.classList.remove('active'));
    this.contentItems.forEach(item => item.classList.remove('active'));


    this.navItems[index].classList.add('active');
    this.contentItems[index].classList.add('active');
  }
}
