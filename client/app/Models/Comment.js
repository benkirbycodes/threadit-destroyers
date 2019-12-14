export default class Comment {
  constructor(data) {
    this.id = data.id;
    this.postId = data.postId;
    this.userId = data.userId;
    this.body = data.body;
  }

  get Template() {
    return /*html*/ `
    <div class="card bg-info text-white" style="width: 18rem;">
  <div class="card-body">
    <p class="card-text">${this.body}</p>
    <button type="button"  onclick="app.commentsController.removeCommentAsync('${this.id}','${this.postId}')">x</button>
    <button type="button"  onclick="app.commentsController.editCommentAsync('${this.id}','${this.postId}')">Edit</button>
  </div>
</div>
    
    `;
  }
}
