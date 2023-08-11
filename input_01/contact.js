// class Contact {
//   constructor(firstName, lastName, phoneNumber) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.phoneNumber = phoneNumber;
//   }
// }
//
// class ContactTable {
//   constructor(tableElementId) {
//     this.table = document.getElementById(tableElementId);
//   }
//
//   addContact(contact) {
//     const rowHTML = `
//             <tr>
//                 <td>${contact.firstName}</td>
//                 <td>${contact.lastName}</td>
//                 <td>${contact.phoneNumber}</td>
//                 <td><button class="deleteBtn">Delete</button></td>
//             </tr>
//         `;
//     this.table.insertAdjacentHTML('beforeend', rowHTML);
//   }
//
//   deleteContact(buttonElement) {
//     buttonElement.closest('tr').remove();
//   }
// }
//
// export { Contact, ContactTable };
