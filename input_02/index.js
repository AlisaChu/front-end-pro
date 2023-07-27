import { Contact, ContactTable } from './contact.js';

const contactForm = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phoneNumber = document.getElementById('phoneNumber');

const contactTable = new ContactTable('contactTable');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!isValidInput(firstName.value, lastName.value, phoneNumber.value)) {
    alert('Error: Invalid inputs. Please check and try again.');
    return;
  }
  const contact = new Contact(firstName.value, lastName.value, phoneNumber.value);
  contactTable.addContact(contact);
  clearForm();
});

contactTable.table.addEventListener('click', function(event) {
  if (event.target.className === 'deleteBtn') {
    contactTable.deleteContact(event.target);
  } else if (event.target.nodeName === 'TD') {
    const element = event.target;
    element.classList.toggle('highlight');
  }
});
function isValidInput(firstName, lastName, phoneNumber) {
  const safeName = new RegExp(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/);
  const safeNumber = new RegExp(/^\d+$/);
  if (firstName === '' || !safeName.test(firstName) ||
    lastName === '' || !safeName.test(lastName) ||
    phoneNumber === '' || !safeNumber.test(phoneNumber)) {
    return false;
  }
  return true;
}
function clearForm() {
  firstName.value = '';
  lastName.value = '';
  phoneNumber.value = '';
}
