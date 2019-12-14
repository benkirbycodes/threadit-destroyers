import store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
const _postApi = axios.create({
  baseURL: "/api/posts",
  timout: 8000
});
class PostsService {
  async downVote(postId) {
    console.log(postId);
    let post = store.State.posts.find(p => p.id == postId);
    console.log(post);
    post.downCount -= 1;
    let res = await _postApi.put(post.id, post);
    console.log(post.downCount);
    store.commit("activePost", new Post(res.data));
  }
  async upVote(postId) {
    console.log(postId);
    let post = store.State.posts.find(p => p.id == postId);
    console.log(post);
    post.upCount += 1;
    let res = await _postApi.put(post.id, post);
    console.log(post.upCount);
    store.commit("activePost", new Post(res.data));
  }
  resetActivePost() {
    store.commit("activePost", {});
    this.getPostsAsync();
  }
  constructor() {
    this.getPostsAsync();
  }
  async editPostAsync(update) {
    //NOTE Check that update.postId is what you think it is
    let post = store.State.posts.find(p => p.id == update.postId);
    //NOTE How do you make sure only creator can edit?
    let res = await _postApi.put(update.postId, update);
    store.commit("activePost", new Post(res.data));

    // this.getPostsAsync();
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
    let posts = res.data.map(p => new Post(p));
    store.commit("posts", posts);
  }
}

const postsService = new PostsService();
export default postsService;
