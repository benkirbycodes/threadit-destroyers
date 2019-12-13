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
    <div class="card" onclick="app.postsController.loadDetailView('${this.id}')">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.body}</p>
  </div>
</div>`;
  }
  get PostDetailTemplate() {
    return /*html*/ `
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.body}</p>
  </div>
  <button type="button" class="btn btn-danger" onclick="app.postsController.removePostAsync('${this.id}')">x</button>
</div>
    `;
  } //TODO figure out comment form
}
