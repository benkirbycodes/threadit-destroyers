import store from "../store.js";
import Comment from "../Models/Comment.js";

// @ts-ignore
const _basicApi = axios.create({
  baseURL: "/api",
  timout: 8000
});
// @ts-ignore
const _commentApi = axios.create({
  baseURL: "/api/comments",
  timeout: 8000
});
class CommentsService {
  async editCommentAsync(update) {
    //NOTE Check that update.commentId is what you think it is
    let comment = store.State.comments.find(c => c.id == update.commentId);
    console.log(update);
    //NOTE How do you make sure only creator can edit?
    let res = await _commentApi.put(update.commentId, update);
    console.log(res);
    this.getCommentsAsync(update.postId);
  }
  async removeCommentAsync(commentId, postId) {
    console.log(commentId, postId);
    let res = await _commentApi.delete(commentId);
    this.getCommentsAsync(postId);
  }
  async addCommentAsync(comment) {
    console.log(comment);

    let res = await _basicApi.post("comments", comment);
    console.log("From add CommentAsync", res);
    this.getCommentsAsync(comment.postId);
  }
  async getCommentsAsync(postId) {
    let res = await _basicApi.get("posts/" + postId + "/comments");
    //NOTE res.data path may be wrong
    let comments = res.data.map(c => new Comment(c));
    store.commit("comments", comments);
  }
}

const commentsService = new CommentsService();
export default commentsService;
