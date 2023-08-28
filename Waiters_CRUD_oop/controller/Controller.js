import { FormView } from '../view/FormView.js'
import { ListView } from '../view/ListView.js'
import { Collection } from '../model/Collection.js'
import { showError } from '../../lib-module'

export class Controller {
  constructor (rootEl) {
    this.rootEl = rootEl

    this.collection = new Collection()
    this.formView = new FormView({
      onSubmit: contact => this.saveContact(contact),
    });
    this.listView = new ListView({
      onEdit: (id) => {
        const contact = this.collection.getContactById(id)

        this.formView.fillForm(contact)
      },
      onDelete: (id) => {
        this.collection.remove(id)
          .then(() => this.listView.deleteContactById(id))
          .catch(showError)
      },
    });

    this.formView.appendTo(this.rootEl)
    this.listView.appendTo(this.rootEl)

    this.collection.getList()
      .then((list) => this.listView.renderList(list))
      .catch(showError)
  }

  saveContact (contact) {
    if (contact.id) {
      this.collection.update(contact)
        .then(() => {
          this.listView.replaceContactEl(contact.id, contact)
          this.formView.clearForm()
        })
        .catch(showError)
    } else {
      this.collection.create(contact)
        .then((newContactWithId) => {
          this.listView.renderContact(newContactWithId)
          this.formView.clearForm()
        })
        .catch(showError)
    }
  }
}