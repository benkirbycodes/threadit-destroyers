import CommentsService from "../Services/CommentsService.js";
import store from "../store.js";

//Private
function _drawComments() {
  let template = "";
  let comments = store.State.comments;
  comments.forEach(c => (template += c.Template));
  document.querySelector("#comments").innerHTML = template;
}

//Public
export default class CommentsController {
  constructor() {
    store.subscribe("comments", _drawComments);
    store.subscribe("activeComment", _drawComments);
  }

  async removeCommentAsync(commentId, postId) {
    if (confirm("Are You Sure You Want To Delete This Post?")) {
      console.log(commentId);
      try {
        await CommentsService.removeCommentAsync(commentId, postId);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }
  async editCommentAsync(event, commentId, postId) {
    event.preventDefault();
    let form = event.target;
    let update = {
      body: form.body.value,
      postId: postId,
      commentId: commentId
    };
    form.reset();

    try {
      await CommentsService.editCommentAsync(update);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  loadEditTemplate(commentId, postId) {
    let comment = store.State.comments.find(c => c.id == commentId);
    let template = comment.editTemplate;
    document.querySelector("#comments").innerHTML = template;
    //CommentsService.getCommentsAsync(postId);
  }
}
