import mongoose from "mongoose";
import Comment from "../models/Comment";

const _repository = mongoose.model("Comment", Comment);

class CommentsService {
  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new Error("Invalid Update Id, CommentsService Server");
    }
    return data;
  }

  async getCommentsByPostId(postId) {
    let data = await _repository.find({ postId });
    if (!data) {
      throw new Error("Invalid Id");
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

const commentsService = new CommentsService();
export default commentsService;
