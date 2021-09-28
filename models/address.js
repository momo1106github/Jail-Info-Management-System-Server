import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  stNum: { type: Number, alias: "streetNumber" },
  dir: { type: String, alias: "direction" }, // TODO: user-maintained list?
  stName: { type: String, alias: "streetName" },
  stType: { type: String, alias: "streetType" },
  aptNum: { type: Number, alias: "apartmentNumber" },
  city: String, // TODO: user-maintained list?
  state: String, // TODO: user-maintained list?
  zipCode: Number, // TODO: user-maintained list?
  telNum: { type: Number, alias: "telephoneNumber" },
});

export default mongoose.model("Address", addressSchema);
