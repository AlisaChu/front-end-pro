export default class ContactsView {
  constructor (options) {
    this.options = options
    this.form = this.init()

    this.bindEvents()
  }

  init() {
    const div = document.createElement('div')

    div.innerHTML = `
      <form id="contactForm" class="form">
        <input type="hidden"  name="id"             id="id"           class="formInput">
        <input type="text"    name="firstName"      id="firstName"    class="formInput" />
        <input type="text"    name="lastName"       id="lastName"     class="formInput" />
        <input type="text"    name="phone"          id="phone"        class="formInput" />
        <button>Save</button>
      </form>
    `

    return div.children[0];
  }

  bindEvents() {
    this.form.addEventListener('submit', this.onFormSubmit.bind(this))
  }

  appendTo(rootEl) {
    rootEl.append(this.form)
  }

  onFormSubmit (e) {
    e.preventDefault()

    const contact = getFormData(this.form.elements)

    if (!this.isContactValid(contact)) {
      showError('Invalid form data')
      return;
    }

    this.options.onSubmit(contact)
  }

  isContactValid (contact) {
    return !isEmpty(contact.firstName)
      && !isEmpty(contact.lastName)
      && !isEmpty(contact.phone)
  }
  clearFormData (formElements) {
    for (const input of formElements) {
      if (input.type === 'text') {
        input.value = ''
      }
    }
  }
  getFormData (formElements) {
    const data = {}

    for (const input of formElements) {
      if (['text', 'hidden'].includes(input.type)) {
        data[input.id] = input.value
      }
    }

    return data
  }
  isEmpty (data) {
    if (data === null || data === undefined) {
      return true
    }
    if (typeof data === 'string') {
      return  data.trim() === ''
    }

    return false;
  }
  showError (message) {
    alert(message)
  }
  fillFormData (formElements, data) {
    for (const input of formElements) {
      if (
        ['text', 'hidden'].includes(input.type)
        && data?.[input.id]
      ) {
        input.value = data[input.id]
      }
    }
  }
  fillForm(contact) {
    fillFormData(this.form.elements, contact)
  }

  clearForm() {
    clearFormData(this.form.elements)
  }
}
const EDIT_BTN_CLASS = 'editBtn'
const DELETE_BTN_CLASS = 'deleteBtn'
const CONTACT_ITEM_CLASS = 'contactItem'

export class ListView {
  constructor (options) {
    this.options = options
    this.container = this.init() // DOM object
    this.contactContainer = this.container.querySelector('#contactContainer')

    this.bindEvents()
  }

  init() {
    const div = document.createElement('div')

    div.innerHTML = `
      <table>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
    
        <tbody id="contactContainer"></tbody>
      </table>
    `

    return div.children[0];
  }

  bindEvents() {
    this.contactContainer.addEventListener('click', this.onContactContainerClick.bind(this))
  }

  onContactContainerClick (e) {
    const target = e.target
    const contactEl = this.findContactEl(target)
    const id = Number(contactEl?.dataset?.id)

    if (id) {
      if (this.isEditButtonClicked(target)) {
        this.options.onEdit(id)
      } else if (this.isDeleteButtonClicked(target)) {
        this.options.onDelete(id)
      }
    }
  }

  appendTo(rootEl) {
    rootEl.append(this.container)
  }

  isEditButtonClicked (el) {
    return el.closest(`.${EDIT_BTN_CLASS}`)
  }

  isDeleteButtonClicked (el) {
    return el.closest(`.${DELETE_BTN_CLASS}`)
  }

  findContactEl (el) {
    return el.closest(`.${CONTACT_ITEM_CLASS}`)
  }

  renderList (contacts) {
    console.log(this.contactContainer)

    this.contactContainer.innerHTML = contacts.map(this.generateContactHtml).join('')
  }

  renderContact (contact) {
    this.contactContainer.insertAdjacentHTML('beforeend', this.generateContactHtml(contact))
  }

  generateContactHtml (contact) {
    return `
    <tr
      class="${CONTACT_ITEM_CLASS}"
      data-id="${contact.id}"
    >
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.phone}</td>
      <td>
          <span>
              <button class="${EDIT_BTN_CLASS}">[Edit]</button>
              <button class="${DELETE_BTN_CLASS}">[Delete]</button>
          </span>
      </td>
    </tr>
  `
  }

  replaceContactEl (id, contact) {
    const oldContactEl = this.findContactElById(id)

    oldContactEl.outerHTML = this.generateContactHtml(contact)
  }

  findContactElById (id) {
    return this.contactContainer.querySelector(`[data-id="${id}"]`)
  }

  deleteContactById (id) {
    const contactEl = this.findContactElById(id)

    if (contactEl) {
      contactEl.remove()
    } else {
      throw new Error('Contact element not found')
    }
  }
}