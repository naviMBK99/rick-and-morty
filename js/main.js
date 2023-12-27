const API = "https://rickandmortyapi.com/api/character";
let list = document.querySelector(".list");
async function getCharacters() {
  let res = await fetch(API);
  let data = await res.json();
  list.innerHTML = "";
  data.results.forEach((elem) => {
    list.innerHTML += `
        <li class="card">
          <img src="${elem.image}" alt="${elem.name}">
          <div class="card-content">
            <p>${elem.name}</p>
            <p>${elem.gender}</p>
            <p>${elem.status}</p>
            <p>${elem.species}</p>
          </div>
        </li>
      `;
  });
}
getCharacters();
const dbJsonAPI = "http://localhost:8000/character";
let list2 = document.querySelector(".list2");
async function fetchData() {
  const response = await fetch(API);
  const data = await response.json();
  return data;
}
async function sendDataToServer(data) {
  await fetch(dbJsonAPI, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  });
}
async function goGo() {
  const data = await fetchData();
  await sendDataToServer(data);
  list2.innerHTML = "";
  data.results.forEach((elem) => {
    list2.innerHTML += `
        <li class="card">
          <img src="${elem.image}" alt="${elem.name}">
          <div class="card-content">
            <p>${elem.name}</p>
            <p>${elem.gender}</p>
            <p>${elem.status}</p>
            <p>${elem.species}</p>
          </div>
        </li>
      `;
  });
}
goGo();
