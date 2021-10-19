import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    last: String,
    first: String,
    middle: String,
    suffix: String,
  },
  AKAs: String,
  permAddr: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    alias: "permanentAddress",
  },
  tempAddr: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    alias: "temporaryAddress",
  },
  dateOfBirth: { type: Date },
  age: { type: Number },
  placeOfBirth: {
    city: String,
    state: String,
    country: String,
  },
  foreignNational: Boolean,
  foreignNationalCountry: String, // user maintained list
  SSN: { type: Number, alias: "socialSecurityNumber" },
  sex: { type: String }, // TODO: user maintained list?
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
  arrestLocation: {
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    commonPlaceName: String,
    reportingDistrict: String, // TODO: automatically input from user maintained list
  },
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
    disposition: {
      status: {
        type: String,
        enum: ["impound", "parked", "other"],
        default: "other",
      },
      impoundCompany: String, // TODO: user maintained list
      impoundLocation: String, // TODO: user maintained list
      parkedCity: String,
      parkedLocation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
      },
      otherText: String,
    },
  },
  specialID: { type: String, alias: "specialIdentifiers" }, // user maintained list
  gangAffiliation: {
    name: String, // user maintained list or Text
    location: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    memStat: {
      type: String,
      enum: ["active", "associate", "former"],
      alias: "gangAffiliation.membershipStatus",
    },
  },
  deptReportNum: { type: Number, alias: "departmentReportNumber" },
  bkDateTime: { type: Date, alias: "bookingDateTime" },
  bkClerksDeptID: { type: String, alias: "bookingClerksDeptID" },
  srchOffsDeptID: { type: String, alias: "searchingOfficersDeptID" },
  arrestBail: Number, // TODO: automatically calculated from a user-maintained table, or entered manually
  property: {}, // TODO
  bookingNumber: Number, // TODO: a sequential number automatically assigned
  emergencyContact: {
    name: {
      last: String,
      middle: String,
      first: String,
      suffix: String,
    },
    relationship: String, // user maintained list
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  },
  occupation: String,
  skills: [String], // user maintained list
  highGrdCpl: { type: Number, alias: "highestGradeCompleted" },
  enAbility: { type: String, alias: "englishAbility" },
  employer: {
    name: {
      last: String,
      first: String,
      middle: String,
      suffix: String,
    },
    typeOfBusiness: String,
    position: String,
  },
  medicalInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MedicalInfo",
  },
  observation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Observation",
  },
  separationRequired: { type: Boolean, default: false },
  comments: [String],
});

bookingSchema.virtual("fullName").get(function () {
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

export default mongoose.model("Booking", bookingSchema);
