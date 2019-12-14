import CommentsService from "../Services/CommentsService.js";
import store from "../store.js";

//Private
function _drawComments() {}

//Public
export default class CommentsController {
  constructor() {
    store.subscribe("comments", _drawComments);
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
