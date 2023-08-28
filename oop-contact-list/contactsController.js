import ContactsModel from './contactsModel.js';
import ContactsView from './contactsView.js';

export default class ContactsController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.contactContainer.addEventListener('click', this.handleContactContainerClick.bind(this));
  }

  async init() {
    try {
      const contacts = await this.model.retrieve();
      this.view.renderList(contacts);
    } catch (error) {
      console.error('Error initializing data', error);
    }
  }

  async handleContactContainerClick(event) {
    const target = event.target;
    const contactEl = target.closest('.contactItem');
    const id = contactEl && contactEl.dataset.id;

    if (target.classList.contains('editBtn')) {
      // Handle editing
    } else if (target.classList.contains('deleteBtn')) {
      try {
        await this.model.delete(id);
        this.view.renderList(await this.model.retrieve());
      } catch (error) {
        console.error('Error deleting contact', error);
      }
    }
  }
}

