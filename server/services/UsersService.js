import mongoose from "mongoose";
import User from "../models/User";

const _repository = mongoose.model("User", User);

class UsersService {
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
    let data = await _repository.findOneAndRemove({ _id: id });
    if (!data) {
      throw new Error("Invalid Update Id");
    }
  }
}

const usersService = new UsersService();
export default usersService;