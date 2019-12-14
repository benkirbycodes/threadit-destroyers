import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true, unique: true },
    userId: { type: ObjectId, ref: "User", required: false },
    downCount: { type: Number, default: 0 },
    upCount: { type: Number, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Post;
