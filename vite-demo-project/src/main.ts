import './style.css'
import { addUser, getUsers } from './app'

const form = document.querySelector<HTMLFormElement>("#user-form")!;
const nameInput = document.querySelector<HTMLInputElement>("#name")!;
const ageInptut = document.querySelector<HTMLInputElement>("#age")!;
const list = document.querySelector<HTMLUListElement>("#user-list")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const age = Number(ageInptut.value);

  if(!name || !age){
    return;
  }

  addUser(name, age);
  renderUsers();
  form.reset();
});

function renderUsers() {
  list.innerHTML = "";
  for(const user of getUsers()) {
    const li = document.createElement("li");
    li.textContent = `${user.id}. ${user.name} (${user.age} years old)`;
    list.appendChild(li);
  }
}
