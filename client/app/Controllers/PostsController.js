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
  async removePostAsync(postId) {
    //NOTE deal with only allowing creator to delete
    try {
      await PostsService.removePostAsync(postId);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async editPostAsync(event) {
    event.preventDefault();
    let form = event.target;
    let update = {
      body: form.body.value,
      postId: form.postId.value
    };
    form.reset();
    try {
      await PostsService.editPostAsync(update);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
