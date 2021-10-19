import mongoose from "mongoose";

const observation = new mongoose.Schema({
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

export default observation;
