import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  deptID: String,
  passwordHash: String,
  role: { type: String, enums: ["inmate", "clerk", "admin"] }, // TODO
});

export default mongoose.model("User", userSchema);
