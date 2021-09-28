import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  deptID: String,
  password: String, // TODO: encryption
  role: { type: String, enums: ["inmate", "clerk", "admin"] }, // TODO
});

export default mongoose.Model("User", userSchema);
