const DELETE_BTN_CLASS = 'deleteBtn';
const CONTACT_ITEM_CLASS = 'contactItem';
const CONTACT_FORM = 'contactForm';
const CONTACT_LIST = 'contactList';

const form = document.querySelector(`#${CONTACT_FORM}`);
const contactList = document.querySelector(`#${CONTACT_LIST}`);

form.addEventListener('submit', onFormSubmit);
contactList.addEventListener('click', onContactListClick);

let currentEditingId = null;

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = form.elements;
  const contact = getFormData(formElements);

  if (!isContactValid(contact)) {
    showError('All fields must be required and phone must be a number.');
    return;
  }

  if (currentEditingId) {
    updateContact(contact, currentEditingId)
      .then(updatedContact => {
        updateContactInUI(updatedContact);
        currentEditingId = null;
        clearFormData(formElements);
      });
  } else {
    addContact(contact)
      .then(data => {
        renderContact(data);
        clearFormData(formElements);
      });
  }
}

function getFormData(formElements) {
  const data = {};

  for (const input of formElements) {
    if (input.type === 'text') {
      data[input.id] = input.value;
    }
  }

  return data;
}

function clearFormData(formElements) {
  for (const input of formElements) {
    if (input.type === 'text') {
      input.value = '';
    }
  }
}

function renderContact(contact) {
  const html = generateTemplate(contact);
  contactList.insertAdjacentHTML('beforeend', html);
}

function updateContactInUI(contact) {
  const contactItemEl = document.querySelector(`[data-id="${contact.id}"]`);
  if (contactItemEl) {
    contactItemEl.querySelector('.contact-name').textContent = contact.name;
    contactItemEl.querySelector('.contact-surname').textContent = contact.surname;
    contactItemEl.querySelector('.contact-phone').textContent = contact.phone;
  }
}

function onContactListClick(e) {
  const contactItemEl = getContactItem(e.target);

  if (contactItemEl) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
      deleteContact(contactItemEl.dataset.id)
        .then(() => removeContact(contactItemEl))
        .catch(error => {
          console.error('Error during deletion:', error);
        });
    } else if (e.target.classList.contains('editBtn')) {
      editContact(contactItemEl);
    }
  }
}

function generateTemplate(contact) {
  return `
    <tr class="${CONTACT_ITEM_CLASS}" data-id="${contact.id}">
      <td class="contact-name">${contact.name}</td>
      <td class="contact-surname">${contact.surname}</td>
      <td class="contact-phone">${contact.phone}</td>
      <td>
        <button type="button" class="${DELETE_BTN_CLASS}">Delete</button>
        <button type="button" class="editBtn">Edit</button>
      </td>
    </tr>
  `;
}

function editContact(contactItemEl) {
  const nameEl = contactItemEl.querySelector('.contact-name');
  const surnameEl = contactItemEl.querySelector('.contact-surname');
  const phoneEl = contactItemEl.querySelector('.contact-phone');

  const contact = {
    name: nameEl.textContent,
    surname: surnameEl.textContent,
    phone: phoneEl.textContent
  };

  currentEditingId = contactItemEl.dataset.id;
  populateFormWithContact(contact);
}

function populateFormWithContact(contact) {
  form.elements['name'].value = contact.name;
  form.elements['surname'].value = contact.surname;
  form.elements['phone'].value = contact.phone;
}

function showError(message) {
  alert(message);
}

function getContactItem(el) {
  return el.closest(`.${CONTACT_ITEM_CLASS}`);
}

function isContactValid(contact) {
  return !isEmpty(contact.name) && !isEmpty(contact.surname) && isNumber(contact.phone);
}

function isEmpty(data) {
  if (data === null || data === undefined) {
    return true;
  }
  return data.trim() === '';
}

function isNumber(numStr) {
  const num = parseFloat(numStr);
  return !isNaN(num) && isFinite(num);
}

function removeContact(el) {
  el.remove();
}
