import mongoose from "mongoose";
import Address from "./address";

const inmateSchema = new mongoose.Schema({
  name: {
    last: String,
    first: String,
    middle: String,
    suffix: String,
  },
  AKAs: { type: String },
  permAddr: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Address,
    alias: "permanentAddress",
  },
  tempAddr: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Address,
    alias: "temporaryAddress",
  },
  dateOfBirth: { type: Date },
  age: { type: Number },
  placeOfBirth: { type: String },
  foreignNational: { type: String }, // user maintained list
  SSN: { type: Number, alias: "socialSecurityNumber" },
  sex: { type: String },
  descent: { type: String }, // user maintained list
  hairColor: { type: String }, // user maintained list
  eyeColor: { type: String }, // user maintained list
  height: { type: [String] }, // TODO: split feet & inches?
  weight: { type: Number, min: 100, max: 500 }, // TODO: define range
  ScarsMarksTattoos: {
    SMT: { type: [String] },
    location: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  },
  arrestDateTime: { type: Date, default: Date.now() },
  arrestingAgency: { type: String },
  arrestLocation: { type: String }, // TODO
  arrestCharges: { type: [String] }, // user maintained list
  arrOffsDeptID: { type: String, alias: "arrestingOfficersDeptID" }, // user maintained list
  transOffsDeptID: { type: String, alias: "transportingOfficersDeptID" }, // user maintained list
  driversLicense: {
    number: Number,
    state: String,
  },
  vehicle: {
    dLNum: { type: Number, alias: "vehicle.driversLicenseNumber" },
    dLSt: { type: String, alias: "vehicle.driverLicenseState" },
    year: String,
    make: String,
    color: String,
    disposition: {}, // TODO
  },
  specialID: { type: String, alias: "specialIdentifiers" }, // user maintained list
  gangAffiliation: {
    name: String, // user maintained list or Text
    location: String,
    memStat: {
      enum: ["active", "associate", "former"],
      alias: "gangAffiliation.membershipStatus",
    },
  },
  deptReportNum: { type: Number, alias: "departmentReportNumber" },
  bkDateTime: { type: Date, alias: "bookingDateTime" },
  bkClerksDeptID: { type: String, alias: "bookingClerksDeptID" },
  srchOffsDeptID: { type: String, alias: "searchingOfficersDeptID" },
  arrestBail: Number,
  property: {}, // TODO
  bkNum: { type: Number, alias: "bookingNumber" },
  emergencyContact: {
    name: {
      last: String,
      middle: String,
      first: String,
      suffix: String,
      relationship: String, // user maintained list
      address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    },
  }, // TODO
  occupation: String,
  skills: [String], // user maintained list
  highGrdCpl: { type: Number, alias: "highestGradeCompleted" },
  enAbility: { type: String, alias: "englishAbility" },
  employer: {}, // TODO
  separationRequired: { type: Boolean, default: false },
  comments: [String],
});

inmateSchema.virtual("fullName").get(function () {
  return (
    this.name.first +
    " " +
    this.name.middle +
    " " +
    this.name.last +
    " " +
    this.name.suffix
  );
});

export default mongoose.model("Inmate", inmateSchema);
