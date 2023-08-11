const searchButton = document.querySelector('#searchButton');
const inputField = document.querySelector('#inputField');

searchButton.addEventListener('click', () => {
  let login = inputField.value.trim();
  let url = `https://api.github.com/users/${login}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) { throw new Error('Network response was not ok'); }
      return response.json();
    })
    .then((data) => {


      document.querySelector('#avatar').src = data.avatar_url;
      document.querySelector('#repositories').textContent = `Repositories: ${data.public_repos}`;
      document.querySelector('#followers').textContent = `Followers: ${data.followers}`;
      document.querySelector('#following').textContent = `Following: ${data.following}`;
    })
    .catch((error) => {
      console.error('An error occurred:', error);
      alert('The username you entered does not exist on GitHub.');
    });
});
