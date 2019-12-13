export default class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    this.userId = data.userId;
  }

  get Template() {
    return this.title;
  }
}
