import { Api } from '../../api/Api.js'
import { contactsUrl } from '../../api/url.js'

export class Collection {
  #list = []

  constructor () {
    this.api = new Api(contactsUrl)
  }

  getList () {
    return this.api
      .getList()
      .then((list) => {
        this.setContacts(list)

        return list
      })
  }

  remove (id) {
    return this.api
      .delete(id)
      .then(() => {
        this.deleteContactInList(id)

        return id
      })
  }

  create (contact) {
    return this.api
      .create(contact)
      .then((newContactWithId) => {
        this.addContactInList(newContactWithId)

        return newContactWithId
      })
  }

  update (contact) {
    return this.api
      .update(contact.id, contact)
      .then(() => {
        this.replaceContactInList(contact.id, contact)

        return contact
      })
  }

  setContacts (list) {
    this.#list = list
  }

  getContacts () {
    return this.#list
  }

  getContactById (id) {
    return this.#list.find(contact => contact.id === id)
  }

  replaceContactInList (id, contact) {
    this.#list = this.#list.map(c => c.id === Number(id) ? { ...contact, id: Number(id) } : c)
  }

  addContactInList (contact) {
    this.#list.push(contact)
  }

  deleteContactInList (id) {
    this.#list = this.#list.filter(contact => contact.id !== Number(id))
  }
}