import mongoose from "mongoose";

const observationSchema = new mongoose.Schema({
  bookingNumber: Number,
  impairedConsciousnessLevel: Number,
  emergencyMedicalCareNeeded: Boolean,
  alcoholInfluenced: Boolean,
  drugsInfluenced: Boolean,
  alcoholDrugWithdrawal: Boolean,
  suicideRisk: Boolean,
  mentalDisorder: Boolean,
  headOrBodyLice: Boolean,
  combative: Boolean,
  escapeRisk: Boolean,
  highProfile: Boolean,
});

export default mongoose.model("Observation", observationSchema);
