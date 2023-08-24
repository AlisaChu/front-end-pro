const EDIT_BTN_CLASS = 'editBtn'
const DELETE_BTN_CLASS = 'deleteBtn'
const CONTACT_ITEM_CLASS = 'contactItem'

const inputs = document.querySelectorAll('.formInput')
const contactContainer = document.querySelector('#contactContainer')
const form = document.querySelector('#contactForm')
const api = new Api(contactsUrl)
let contactList = []

contactContainer.addEventListener('click', onContactContainerClick)
form.addEventListener('submit', onFormSubmit)

init()

function init () {
  api.getList().then((list) => {
    renderList(list)
    contactList = list
  })
}
document.addEventListener('DOMContentLoaded', init);

function onContactContainerClick (e) {
  const target = e.target
  const contactEl = findContactEl(target)
  const id = Number(contactEl?.dataset?.id)

  if (id) {
    if (isEditButtonClicked(target)) {
      const contact = getContactById(id)

      // fillForm(form.elements, contact)
      fillFormInputs(inputs, contact)
    } else if (isDeleteButtonClicked(target)) {
      api
        .delete(id)
        .then(() => deleteContactById(id))
        .catch(showError)
    }
  }
}
function isEditButtonClicked (el) {
  return el.closest(`.${EDIT_BTN_CLASS}`)
}

function isDeleteButtonClicked (el) {
  return el.closest(`.${DELETE_BTN_CLASS}`)
}

function findContactEl (el) {
  return el.closest(`.${CONTACT_ITEM_CLASS}`)
}

function renderList (contacts) {
  contactContainer.innerHTML = contacts.map(generateContactHtml).join('')
}

function renderContact (contact) {
  contactContainer.insertAdjacentHTML('beforeend', generateContactHtml(contact))
}

function generateContactHtml (contact) {
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
function clearFormData (formElements) {
  for (const input of formElements) {
    if (input.type === 'text') {
      input.value = ''
    }
  }
}
function onFormSubmit(e) {
  e.preventDefault();
  const contact = getFormData(document.querySelector('#contactForm'));

  if (!isContactValid(contact)) {
    return;  // halt the function if the contact is not valid
  }

  if (contact.id) { // update
    api.update(contact.id, contact).then(() => {
      replaceContactInList(Number(contact.id), contact);
      renderList(contactList);
      showNotification('Contact updated successfully.');
      clearFormData(inputs);  // Очистите форму после успешного обновления
    }).catch(showError);
  } else { // create
    api.create(contact).then((newContactWithId) => {
      contactList.push(newContactWithId);
      renderList(contactList);
      showNotification('Contact created successfully.');
      clearFormData(inputs);  // Очистите форму после успешного создания
    }).catch(showError);
  }
}


function findContactElById (id) {
  return contactContainer.querySelector(`[data-id="${id}"]`)
}

function getContactById (id) {
  return contactList.find(contact => contact.id === id)
}

function replaceContactInList (id, contact) {
  contactList = contactList.map(c => c.id === Number(id) ? { ...contact, id: Number(id) } : c)
}


function fillFormInputs (inputs, data) {
  for (const input of inputs) {
    if (data?.[input.id]) {
      input.value = data[input.id]
    }
  }
}

function showNotification(message) {
  const notification = document.querySelector('#notification');
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);  // hide after 3 seconds
}

function isContactValid(contact) {
  if (!contact.firstName || !contact.lastName || !contact.phone) {
    showError('All fields are required.');
    return false;
  }
  // More validations can be added as needed.
  return true;
}
function getFormData (formElements) {
  const data = {}

  for (const input of formElements) {
    if (['text', 'hidden'].includes(input.type)) {
      data[input.id] = input.value
    }
  }

  return data
}

function deleteContactById (id) {
  const contactEl = findContactElById(id)

  if (contactEl) {
    contactEl.remove()
  } else {
    throw new Error('Contact element not found')
  }
}