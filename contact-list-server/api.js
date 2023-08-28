const contactsUrl = 'https://mock-api-5678.nw.r.appspot.com/contacts/';

class Api {
  constructor(url) {
    this.url = url;
  }

  getList() {
    return this.request().catch(error => {
      throw new Error(`Cannot fetch list: ${error.message}`);
    });
  }

  create(contact) {
    return this.request('', 'POST', contact).catch(error => {
      throw new Error(`Cannot create: ${error.message}`);
    });
  }

  update(id, contact) {
    return this.request(id, 'PUT', contact).catch(error => {
      throw new Error(`Cannot update: ${error.message}`);
    });
  }

  delete(id) {
    return this.request(id, 'DELETE').catch(error => {
      throw new Error(`Cannot delete: ${error.message}`);
    });
  }

  request(url = '', method = 'GET', body) {
    return fetch(`${this.url}${url}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) return response.json();
      return response.json().then(err => { throw err; });
    });
  }
}
