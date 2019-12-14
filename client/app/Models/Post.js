export default class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    this.userId = data.userId;
    this.upCount = data.upCount;
    this.downCount = data.downCount;
  }

  get PostTemplate() {
    /*html*/
    return `
    <div class="card bg-dark text-warning border-warning text-center" onclick="app.postsController.loadDetailView('${this.id}')">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.body}</p>
  </div>
</div>`;
  }
  get PostDetailTemplate() {
    return /*html*/ `
    <div class="card bg-dark border-warning text-warning">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.body}</p>
    <div class="btn-group btn-group-sm" role="group">
    <button type="button" class="btn btn-sm btn-dark btn-outline-warning" onclick="app.postsController.removePostAsync('${this.id}')">Delete</button>
    <button type="button" class="btn btn-sm btn-dark btn-outline-warning" onclick="app.postsController.loadEditPostDetailTemplate('${this.id}')">Edit</button>
    <button type="button" class="btn btn-sm btn-dark btn-outline-warning" onclick="app.postsController.upVote('${this.id}')">Up 
    
    </button>
    <button type="button" class="btn btn-sm btn-dark btn-outline-warning" onclick="app.postsController.downVote('${this.id}')">Down</button>  
    </div>

  </div>
  <div id="comments" class="text-center"></div> 
  <form onsubmit="app.postsController.addCommentAsync(event, '${this.id}')">
  <div class="form-group">
    <input required name="body" type="text" class=" text-warning form-control" placeholder="add to the story...">
  </div>
  <div class="btn-group btn-group-sm" role="group">
  <button class="btn btn-sm btn-dark btn-outline-warning" type="submit">Add</button>
  <button class="btn btn-sm btn-dark btn-outline-warning" type="button" onclick="app.postsController.resetActivePost()">Back</button>
  </div>
  
  </form>
  </div>
    `;
  } //TODO figure out comment form

  get editPostDetailTemplate() {
    return /*html*/ `
    <div class="card bg-dark text-warning">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.body}</p>
  </div>
  
  <form onsubmit="app.postsController.editPostAsync(event, '${this.id}')">
  <input class=""type= "text" name="body" value="${this.body}">
  <button class="btn btn-sm btn-dark btn-outline-warning" type="submit"  >Edit Post</button></form>
  <div id="comments"></div> 
  <form onsubmit="app.postsController.addCommentAsync(event, '${this.id}')">
  <div class="form-group">
    <input name="body" type="text" class="form-control " placeholder="add to the story...">
  </div>
  <button type="submit">Add</button>
  </form>
  </div>
    `;
  }
}
