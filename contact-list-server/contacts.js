const EDIT_BTN_CLASS = 'editBtn';
const DELETE_BTN_CLASS = 'deleteBtn';
const CONTACT_ITEM_CLASS = 'contactItem';

const api = new Api(contactsUrl);
let contactList = [];

document.addEventListener('DOMContentLoaded', init);

function init() {
  api.getList().then((list) => {
    renderList(list);
    contactList = list;
  });
  setupEventListeners();
}

function setupEventListeners() {
  document.querySelector('#contactContainer').addEventListener('click', onContactContainerClick);
  document.querySelector('#contactForm').addEventListener('submit', onFormSubmit);
}

function onContactContainerClick(e) {
  const target = e.target;
  const contactEl = findContactEl(target);
  const id = Number(contactEl?.dataset?.id);

  if (id) {
    if (isEditButtonClicked(target)) {
      fillFormWithData(document.querySelector('#contactForm'), getContactById(id));
    } else if (isDeleteButtonClicked(target)) {
      api.delete(id).then(() => {
        deleteContactById(id);
      }).catch(showError);
    }
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const contact = getFormData(document.querySelector('#contactForm'));
  if (contact.id) { // update
    api.update(contact.id, contact).then(() => {
      replaceContactInList(Number(contact.id), contact);
      renderList(contactList);
    }).catch(showError);
  } else { // create
    api.create(contact).then((newContactWithId) => {
      contactList.push(newContactWithId);
      renderList(contactList);
    }).catch(showError);
  }
}

function isEditButtonClicked(el) {
  return el.closest(`.${EDIT_BTN_CLASS}`);
}

function isDeleteButtonClicked(el) {
  return el.closest(`.${DELETE_BTN_CLASS}`);
}

function findContactEl(el) {
  return el.closest(`.${CONTACT_ITEM_CLASS}`);
}

function renderList(contacts) {
  document.querySelector('#contactContainer').innerHTML = contacts.map(generateContactHtml).join('');
}

function generateContactHtml(contact) {
  return `
    <tr class="${CONTACT_ITEM_CLASS}" data-id="${contact.id}">
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.phone}</td>
      <td>
        <button class="${EDIT_BTN_CLASS}">Edit</button>
        <button class="${DELETE_BTN_CLASS}">Delete</button>
      </td>
    </tr>
  `;
}

function getContactById(id) {
  return contactList.find(contact => contact.id === id);
}

function replaceContactInList(id, contact) {
  const index = contactList.findIndex(c => c.id === id);
  if (index !== -1) {
    contactList[index] = contact;
  }
}

function getFormData(form) {
  return [...form.elements].reduce((data, input) => {
    if (input.name && input.value) data[input.name] = input.type === "number" ? Number(input.value) : input.value;
    return data;
  }, {});
}

function fillFormWithData(form, data) {
  Object.entries(data).forEach(([key, value]) => {
    const input = form[key];
    if (input) input.value = value;
  });
}

function showError(error) {
  alert(error.message);
}

function deleteContactById(id) {
  contactList = contactList.filter(contact => contact.id !== id);
  renderList(contactList);
}
class Contacts {
  constructor (api) {
    this.api = api;
    this.contactList = [];
    this.inputs = document.querySelectorAll('.formInput');
    this.contactContainer = document.querySelector('#contactContainer');
    this.form = document.querySelector('#contactForm');

    this.initEventListeners();
  }

  initEventListeners () {
    this.contactContainer.addEventListener('click', this.onContactContainerClick.bind(this));
    this.form.addEventListener('submit', this.onFormSubmit.bind(this));
  }

  renderList (contacts) {
    this.contactContainer.innerHTML = contacts.map(this.generateContactHtml).join('');
  }


  onContactContainerClick (e) {
    const target = e.target;
    const contactEl = target.closest('.contactItem');
    const id = contactEl && contactEl.dataset.id;

    if (target.classList.contains('editBtn')) {
      const contact = this.contactList.find(c => c.id === id);
      this.fillForm(contact);
    } else if (target.classList.contains('deleteBtn')) {
      this.api.delete(id)
        .then(() => {
          this.contactList = this.contactList.filter(c => c.id !== id);
          contactEl.remove();
        })
        .catch(console.error);
    }
  }

  fillForm (contact) {
    this.form.id.value = contact.id;
    this.form.firstName.value = contact.firstName;
    this.form.lastName.value = contact.lastName;
    this.form.phone.value = contact.phone;
  }

  onFormSubmit (e) {
    e.preventDefault();
    const contact = {
      id: this.form.id.value,
      firstName: this.form.firstName.value,
      lastName: this.form.lastName.value,
      phone: this.form.phone.value
    };

    if (contact.id) {
      this.api.update(contact.id, contact).then(updatedContact => {
        const index = this.contactList.findIndex(c => c.id === updatedContact.id);
        this.contactList[index] = updatedContact;
        this.renderList(this.contactList);
      }).catch(console.error);
    } else { // Иначе создаем новый контакт
      this.api.create(contact).then(newContact => {
        this.contactList.push(newContact);
        this.renderList(this.contactList);
      }).catch(console.error);
    }
  }
}
