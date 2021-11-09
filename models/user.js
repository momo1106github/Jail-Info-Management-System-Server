import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  deptID: String,
  passwordHash: String,
  role: { type: String, enums: ["clerk", "supervisor"] }, // TODO
});

export default mongoose.model("User", userSchema);
