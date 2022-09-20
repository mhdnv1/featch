let url = "https://api.escuelajs.co/api/v1/users";
let row = document.querySelector(".row");

fetch(url)
  .then((res) => res.json())
  .then((res) =>
  //   res.forEach((item) => {
  //     row.innerHTML += `
  //     <div class="row__item">
  //     <img src="${item.avatar}" alt="">
  //     <p class="email">email:${item.email}</p>
  //     <p class="id">id:${item.id}</p>
  //     <p class="name">name:${item.name}</p>
  //     <p class="password">password:${item.password}</p>
  //     <p class="role">role:${item.role}</p>
  // </div>
  //     `;
  //     console.log(res);
  //   })
  console.log(res)
  )
  .catch((err) => console.log(err));
