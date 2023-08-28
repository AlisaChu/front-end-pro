const API_URL = 'https://62054479161670001741b708.mockapi.io/api/contacts';

function addContact(contact) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error adding contact:', error);
    });
}

function updateContact(contact, id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error updating contact:', error);
    });
}

function deleteContact(id) {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error deleting contact:', error);
    });
}

function fetchContacts() {
  return fetch(API_URL)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching contacts:', error);
    });
}
fetchContacts().then(contacts => {

  console.log(contacts);
});
