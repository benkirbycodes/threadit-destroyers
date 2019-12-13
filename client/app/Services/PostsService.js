import store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
const _postApi = axios.create({
  baseURL: "",
  timout: 8000
});
class PostsService {
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

const service = new PostsService();
export default service;
