export default class Comment {
  constructor(data) {
    this.id = data.id;
    this.postId = data.postId;
    this.userId = data.userId;
    this.body = data.body;
    this.upCount = data.upCount;
    this.downCount = data.downCount;
  }

  get Template() {
    return /*html*/ `
    <div class="card bg-dark border-warning m-3 text-warning content-center">
  <div class="card-body">
    <p class="card-text">${this.body}</p>
    <div class="btn-group btn-group-sm" role="group">
    <button class="btn btn-sm btn-dark btn-outline-warning"type="button"  onclick="app.commentsController.removeCommentAsync('${this.id}','${this.postId}')">Delete</button>
    <button class="btn btn-sm btn-dark btn-outline-warning" type="button"  onclick="app.commentsController.loadEditTemplate('${this.id}','${this.postId}')">Edit</button>
    <button class="btn btn-sm btn-dark btn-outline-warning" type="button" onclick="app.commentsController.upVote('${this.id}','${this.postId}')">Up</button>
    <button class="btn btn-sm btn-dark btn-outline-warning" type="button" onclick="app.commentsController.downVote('${this.id}','${this.postId}')">Down</button>  
    </div>
    </div>
</div>
    
    `;
  }

  get editTemplate() {
    return /*html*/ `<div class="card bg-dark border-warning text-warning" >
  <div class="card-body ">
    <p class="card-text">${this.body}</p>
    
    <form onsubmit="app.commentsController.editCommentAsync(event, '${this.id}','${this.postId}')">
    <input class="rounded"type="text" name="body" value="${this.body}">
    <button type="submit" class="btn btn-sm btn-dark btn-outline-warning" >Edit</button>
    </form>
  </div>
</div>`;
  }
}
