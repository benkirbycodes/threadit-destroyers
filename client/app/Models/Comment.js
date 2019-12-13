export default class Comment {
  constructor(data) {
    this.id = data.id;
    this.postId = data.postId;
    this.userId = data.userId;
    this.body = data.body;
  }

  get Template() {
    return;
  }
}
