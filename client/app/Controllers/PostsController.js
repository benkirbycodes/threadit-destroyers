import PostsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _draw() {
  let posts = store.State.Posts;
  console.log(posts);
}

//Public
export default class PostsController {
  constructor() {
    store.subscribe("posts", _draw);
  }
  async addPostAsync(event) {
    event.preventDefault();
    let form = event.target;
    let post = {
      title: form.title.value,
      body: form.body.value,
      userId: form.userId.value
    };
    form.reset();
    try {
      await PostsService.addPostAsync(post);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
