const API_ENDPOINT = 'https://62054479161670001741b708.mockapi.io/api/contacts';

function fetchContacts() {
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function addContact(contact) {
  return fetch(API_ENDPOINT, {
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
  return fetch(`${API_ENDPOINT}/${id}`, {
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
  return fetch(`${API_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete contact.');
      }
    })
    .catch(error => {
      console.error('Error deleting contact:', error);
    });
}
