import {
  clearFormData,
  fillFormData,
  getFormData,
  isEmpty,
  showError,
} from '../../lib-module'

export class FormView {
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

  fillForm(contact) {
    fillFormData(this.form.elements, contact)
  }

  clearForm() {
    clearFormData(this.form.elements)
  }
}