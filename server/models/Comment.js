import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema(
  {
    body: { type: String, required: true, unique: true },
    userId: { type: ObjectId, ref: "User", required: false },
    postId: { type: ObjectId, ref: "Post", required: false },
    dislikeCount: { type: Number },
    likesCount: { type: Number }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;
