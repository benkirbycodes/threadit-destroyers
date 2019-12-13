import mongoose from "mongoose";
import Comment from "../models/Comment";

const _repository = mongoose.model("Comment", Comment);

class CommentsService {
  async getById(id) {
    return await _repository.findById(id);
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