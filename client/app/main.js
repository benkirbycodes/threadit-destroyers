import CommentsController from "./Controllers/CommentsController.js";
import PostsController from "./Controllers/PostsController.js";

class App {
  commentsController = new CommentsController();
  postsController = new PostsController();
}

window["app"] = new App();
