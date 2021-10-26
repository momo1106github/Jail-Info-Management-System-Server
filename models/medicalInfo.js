import mongoose from "mongoose";

const medicalInfoSchema = new mongoose.Schema({
  bookingNumber: Number,
  communicableDisease: Boolean,
  diabetes: Boolean,
  epilepsy: Boolean,
  heartDisease: Boolean,
  medicationsBeingTaken: [String],
  doctor: {
    name: String,
    telephoneNumber: Number,
  },
  onBirthControlMedicine: Boolean, // female only
  pregnant: Boolean, // female only
  pregnantPeriod: Number, // months
});

export default mongoose.model("MedicalInfo", medicalInfoSchema);
