
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, default: "https://robohash.org/user" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default User;