import mongoose from "mongoose";

const trustAccountSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  balance: Number,
});

export default mongoose.model("TrustAccount", trustAccountSchema);
