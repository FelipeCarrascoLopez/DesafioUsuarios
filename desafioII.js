(function() {
    async function fetchData() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        return data.results;
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
    }
  
    async function displayUserData() {
      const userDataDiv = document.getElementById('user-data');
      const users = await fetchData();
  
      users.forEach(user => {
        const userContainer = document.createElement('div');
        userContainer.classList.add('user-container');
  
        const img = document.createElement('img');
        img.src = user.picture.large;
        img.alt = `${user.name.first} ${user.name.last}`;
  
        const name = document.createElement('p');
        name.textContent = `${user.name.first} ${user.name.last}`;
  
        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;
  
        const phone = document.createElement('p');
        phone.textContent = `Phone: ${user.phone}`;
  
        userContainer.appendChild(img);
        userContainer.appendChild(name);
        userContainer.appendChild(email);
        userContainer.appendChild(phone);
  
        userDataDiv.appendChild(userContainer);
      });
    }
  
    displayUserData();
  })();
  