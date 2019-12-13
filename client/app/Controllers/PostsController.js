import PostsService from "../Services/PostsService.js";
import store from "../store.js";

//Private
function _drawPosts() {
  let posts = store.State.posts;
  console.log(posts);
  let template = "";
  posts.forEach(post => (template += post.PostTemplate));
  document.querySelector("#posts").innerHTML = template;
}

//Public
export default class PostsController {
  constructor() {
    store.subscribe("posts", _drawPosts);
    _drawPosts();
  }
  drawForm() {
    let template = /*html*/ `<form onsubmit="app.postsController.addPostAsync(event)">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter Title...">
    </div>
    <div class="form-group">
      <label for="body">Opening Line</label>
      <input type="text" class="form-control" id="body" placeholder="Start Your Story...">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
    document.querySelector("#posts").innerHTML = template;
  }
  async addPostAsync(event) {
    console.log(event);
    event.preventDefault();
    let form = event.target;
    console.log("from postsController", form);
    let post = {
      title: form.title.value,
      body: form.body.value
    };
    console.log("from POstConstroller", post);
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
