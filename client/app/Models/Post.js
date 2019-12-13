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
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">${this.title}</h5>
    <p class="card-text">${this.body}</p>
  </div>
</div>`;
  }
}
