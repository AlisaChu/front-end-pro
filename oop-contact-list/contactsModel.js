const apiUrl = 'https://mock-api-5678.nw.r.appspot.com/waiters';

export default class ContactsModel {
  async retrieveAll() {
    return this.request();
  }

  async update(id, contactData) {
    return this.request(id, 'PUT', contactData);
  }

  async delete(id) {
    return this.request(id, 'DELETE');
  }

  async request(endpoint = '', method = 'GET', body) {
    try {
      const response = await fetch(`${apiUrl}/${endpoint}`, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        return await response.json();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'API Error');
      }
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
}
