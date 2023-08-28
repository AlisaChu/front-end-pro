import Model from './contactsModel.js';
import View from './contactsView.js';
import Controller from './controller.js';

const apiUrl = 'https://mock-api-5678.nw.r.appspot.com/waiters';
const model = new Model(apiUrl);
const view = new View();
const controller = new Controller(model, view);

controller.init();

export default class Api {
  constructor() {
    this.contacts = [
      { name: 'John', email: 'john@example.com' },
      { name: 'Jane', email: 'jane@example.com' }
    ];
  }

  getList() {
    return Promise.resolve(this.contacts);
  }

  addContact(contact) {
    this.contacts.push(contact);
    return Promise.resolve();
  }
}
// app.js
