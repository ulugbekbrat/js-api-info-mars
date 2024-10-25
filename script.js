let card = document.querySelector('.card');
let input = document.querySelector('input');
let button = document.querySelector('button');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => {
    let users = data;

    function displayResults(filteredUsers) {
      card.innerHTML = filteredUsers
        .map(
          (user) => `
            <div class='box'>
              <h1>${user.name}</h1>
              <p>${user.address.city}</p>
              <p>${user.phone}</p>
            </div>
          `
        )
        .join('');
    }

    displayResults(users);

    input.addEventListener('input', () => {
      let query = input.value.toLowerCase();
      let filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(query)
      );
      displayResults(filteredUsers);
    });

    button.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      button.textContent = document.body.classList.contains('dark-mode')
        
    });
  });
