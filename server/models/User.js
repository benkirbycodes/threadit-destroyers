
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const User = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default User;