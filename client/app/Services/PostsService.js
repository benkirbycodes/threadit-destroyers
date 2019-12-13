import store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
const _postApi = axios.create({
  baseURL: "",
  timout: 8000
});
class PostsService {
  async editPostAsync(update) {
    //NOTE Check that update.postId is what you think it is
    let post = store.State.posts.find(p => p.id == update.postId);
    //NOTE How do you make sure only creator can edit?
    let res = await _postApi.put(update.postId, post);
    this.getPostsAsync();
  }
  async removePostAsync(postId) {
    let res = await _postApi.delete(postId);
    this.getPostsAsync();
  }
  async addPostAsync(post) {
    let res = await _postApi.post("", post);
    this.getPostsAsync();
  }
  async getPostsAsync() {
    let res = await _postApi.get();
    //NOTE res.data path may be wrong
    let posts = res.data.map(p => new Post(p));
    store.commit("posts", posts);
  }
}

const postsService = new PostsService();
export default postsService;
