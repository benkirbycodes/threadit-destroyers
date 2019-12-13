import store from "../store.js";
import Comment from "../Models/Comment.js";

// @ts-ignore
const _commentApi = axios.create({
  baseURL: "",
  timout: 8000
});
class CommentsService {
  async editCommentAsync(update) {
    //NOTE Check that update.commentId is what you think it is
    let comment = store.State.comments.find(c => c.id == update.commentId);
    //NOTE How do you make sure only creator can edit?
    let res = await _commentApi.put(update.commentId, comment);
    this.getCommentsAsync();
  }
  async removeCommentAsync(commentId) {
    let res = await _commentApi.delete(commentId);
    this.getCommentsAsync();
  }
  async addCommentAsync(comment) {
    let res = await _commentApi.post("", comment);
    this.getCommentsAsync();
  }
  async getCommentsAsync() {
    let res = await _commentApi.get();
    //NOTE res.data path may be wrong
    let comments = res.data.map(c => new Comment(c));
    store.commit("comments", comments);
  }
}

const commentsService = new CommentsService();
export default commentsService;
