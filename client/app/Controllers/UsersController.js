import UsersService from "../Services/UsersService.js";
import store from "../store.js";

//Private
function _drawUsers() {
  let users = store.State.users;
  console.log(users);
}

//Public
export default class UsersController {
  constructor() {
    store.subscribe("users", _drawUsers);
  }
  async addUserAsync(event) {
    event.preventDefault();
    let form = event.target;
    let user = {
      name: form.name.value,
      img: form.img.value
    };
    form.reset();
    try {
      await UsersService.addUserAsync(user);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
