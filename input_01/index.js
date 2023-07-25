const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const phoneNumberInput = document.getElementById('phoneNumber');
const contactForm = document.getElementById('contactForm');
const contactTableElement = document.getElementById('contactTable');

class Contact {
    constructor(firstName, lastName, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}
class ContactTable {
    constructor(tableElement) {
        this.table = tableElement;
    }

    addContact(contact) {
        const rowHTML = `
            <tr>
                <td>${contact.firstName}</td>
                <td>${contact.lastName}</td>
                <td>${contact.phoneNumber}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
        this.table.insertAdjacentHTML('beforeend', rowHTML);
    }

    deleteContact(buttonElement) {
        const row = buttonElement.closest('tr');
        if (row) {
            row.remove();
        }
    }
}


const contactTable = new ContactTable(contactTableElement);

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!isValidInput(firstNameInput.value, lastNameInput.value, phoneNumberInput.value)) {
        alert('Error: Invalid inputs. Please check and try again.');
        return;
    }

    const contact = new Contact(firstNameInput.value, lastNameInput.value, phoneNumberInput.value);
    contactTable.addContact(contact);

    clearInputs();
});

contactTableElement.addEventListener('click', function(event) {
    if (event.target.className === 'deleteBtn') {
        contactTable.deleteContact(event.target);
    }
});

function isValidInput(firstName, lastName, phoneNumber) {
    if (firstName === '' || lastName === '' || phoneNumber === '' || isNaN(phoneNumber)) {
        return false;
    }
    return true;
}
function clearInputs() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    phoneNumberInput.value = '';
}
