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
    <button type="button"  onclick="app.commentsController.removeCommentAsync('${this.id}')">x</button>
  </div>
</div>
    
    `;
  }
}
