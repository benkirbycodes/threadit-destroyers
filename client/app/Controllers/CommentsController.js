import CommentsService from "../Services/CommentsService.js";
import store from "../store.js";

//Private
function _drawComments() {
  let comments = store.State.comments;
  console.log(comments);
}

//Public
export default class CommentsController {
  constructor() {
    store.subscribe("comments", _drawComments);
  }
  async addCommentAsync(event) {
    event.preventDefault();
    let form = event.target;
    let comment = {
      postId: form.postId.value,
      body: form.body.value,
      userId: form.userId.value
    };
    form.reset();
    try {
      await CommentsService.addCommentAsync(comment);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async removeCommentAsync(commentId) {
    //NOTE deal with only allowing creator to delete
    try {
      await CommentsService.removeCommentAsync(commentId);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async editCommentAsync(event) {
    event.preventDefault();
    let form = event.target;
    let update = {
      body: form.body.value,
      postId: form.postId.value,
      commentId: form.commentId.value
    };
    form.reset();
    try {
      await CommentsService.editCommentAsync(update);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
