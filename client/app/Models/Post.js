export default class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    this.userId = data.userId;
  }

  get PostTemplate() {
    /*html*/
    return `
    <div class="card bg-info text-white" style="width: 18rem;" onclick="app.postsController.loadDetailView('${this.id}')">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.body}</p>
  </div>
</div>`;
  }
  get PostDetailTemplate() {
    return /*html*/ `
    <div class="card bg-info text-white">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.body}</p>
  </div>
  <button type="button" class="btn btn-danger" onclick="app.postsController.removePostAsync('${this.id}')">x</button>
  <button type="button" onclick="app.postsController.loadEditPostDetailTemplate('${this.id}')">Edit</button>
  <div id="comments"></div> 
  <form onsubmit="app.postsController.addCommentAsync(event, '${this.id}')">
  <div class="form-group">
    <input name="body" type="text" class="form-control" placeholder="add to the story...">
  </div>
  <button type="submit">Add</button>
  <button type="button" onclick="app.postsController.resetActivePost()">Back</button>
  </form>
  </div>
    `;
  } //TODO figure out comment form

  get editPostDetailTemplate() {
    return /*html*/ `
    <div class="card bg-info text-white">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.body}</p>
  </div>
  <button type="button" class="btn btn-danger" onclick="app.postsController.removePostAsync('${this.id}')">x</button>
  <form onsubmit="app.postsController.editPostAsync(event, '${this.id}')">
  <input type= "text" name="body" value="${this.body}">
  <button type="submit"  >Edit Post</button></form>
  <div id="comments"></div> 
  <form onsubmit="app.postsController.addCommentAsync(event, '${this.id}')">
  <div class="form-group">
    <input name="body" type="text" class="form-control" placeholder="add to the story...">
  </div>
  <button type="submit">Add</button>
  </form>
  </div>
    `;
  }
}
