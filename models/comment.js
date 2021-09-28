import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateTime: Date,
});

export default mongoose.model("Comment", commentSchema);
