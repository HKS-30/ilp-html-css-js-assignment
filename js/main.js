const request = fetch("https://dummyjson.com/users/");
console.log(request);

request
  .then((response) => response.json())
  .then((data) => {
    let random = Math.floor(Math.random() * 4);
    let k = 1;
    for (let i = random; i < random + 4; i++) {
      const image = document.getElementById(`img-${k}`);
      image.src = data.users[i].image;
      const h3 = document.getElementById(`specialist-h5-${k}`);
      h3.textContent = data.users[i].firstName + " " + data.users[i].lastName;
      const p = document.getElementById(`specialist-p-${k}`);
      p.textContent = data.users[i].company.department;
      k++;
    }
  })
  .catch((reject) => console.log(reject));
