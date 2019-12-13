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
}
