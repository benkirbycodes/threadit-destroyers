import mongoose from "mongoose";
import Post from "../models/Post";

const _repository = mongoose.model("Post", Post);

class PostsService {

  async getAll() {
    return await _repository.find({})
  }
  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new Error("Invalid Update Id");
    }
    return data;
  }

  async getPostsByUserId(userId) {
    let data = await _repository.find({ userId });
    if (!data) {
      throw new Error("Invalid Update Id");
    }
    return data;
  }

  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new Error("Invalid Update Id");
    }
    return data;
  }

  async delete(id) {
    let data = await _repository.findOneAndRemove(id);
    if (!data) {
      throw new Error("Invalid Update Id");
    }
  }
}

const postsService = new PostsService();
export default postsService;