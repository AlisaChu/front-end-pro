import ContactsController from './contactsController.js';
import ContactsModel from './contactsModel.js';
import ContactsView from './contactsView.js';

document.addEventListener('DOMContentLoaded', () => {
  const model = new ContactsModel();
  const view = new ContactsView();
  const controller = new ContactsController(model, view);
  controller.init();
});
