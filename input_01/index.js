class Contact {
    constructor(firstName, lastName, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}

class ContactTable {
    constructor(tableElementId) {
        this.table = document.getElementById(tableElementId);
    }

    addContact(contact) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.phoneNumber}</td>
            <td><button class="deleteBtn">Delete</button></td>
        `;
        this.table.appendChild(row);
        this.table.dispatchEvent(new CustomEvent('contactAdded', {
            detail: { contact }
        }));
    }

    deleteContact(buttonElement) {
        buttonElement.parentElement.parentElement.remove();
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phoneNumber = document.getElementById('phoneNumber');

    if (!isValidInput(firstName.value, lastName.value, phoneNumber.value)) {
        alert('Error: Invalid inputs. Please check and try again.');
        return;
    }

    const contact = new Contact(firstName.value, lastName.value, phoneNumber.value);
    const contactTable = new ContactTable('contactTable');
    contactTable.addContact(contact);

    firstName.value = '';
    lastName.value = '';
    phoneNumber.value = '';
});

document.getElementById('contactTable').addEventListener('click', function(event) {
    if (event.target.className === 'deleteBtn') {
        const contactTable = new ContactTable('contactTable');
        contactTable.deleteContact(event.target);
    }
});

document.getElementById('contactTable').addEventListener('contactAdded', function(event) {
    console.log(`New contact added: ${event.detail.contact.firstName} ${event.detail.contact.lastName} ${event.detail.contact.phoneNumber}`);
});



function isValidInput(firstName, lastName, phoneNumber) {
    if (firstName === '' || lastName === '' || phoneNumber === '' || isNaN(phoneNumber)) {
        return false;
    }
    return true;
}
