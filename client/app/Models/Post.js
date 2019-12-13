export default class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    this.userId = data.userId;
  }

  get addPostTemplate() {
    /*html*/
    return ` <form onsubmit="app.postsController.addPostAsync(event)">
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" name="title" class="form-control"  aria-describedby="title" placeholder="Enter Title...">
  </div>
  <div class="form-group">
    <label for="body">Opening Line</label>
    <input type="text" class="form-control" name="body"  placeholder="Start Your Story...">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  }
}
