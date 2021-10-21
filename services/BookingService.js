import Booking from "../models/booking";

class BookingService {
  static async getBooking({ bookingNumber }) {
    const booking = await Booking.findOne({ bookingNumber });
    if (!booking) throw new Error("BOOKING_INFORMATION_NOT_EXISTS");

    return booking;
  }

  static async UpsertBooking({ deptID, booking }) {
    const update = {
      name: booking.name,
      AKAs: booking.AKAs,
      permAddr: booking.permAddr,
      tempAddr: booking.tempAddr,
      dateOfBirth: booking.dateOfBirth,
      age: booking.age,
      placeOfBirth: booking.placeOfBirth,
      foreignNational: booking.foreignNational,
      foreignNationalCountry: booking.foreignNationalCountry,
      SSN: booking.SSN,
      sex: booking.sex,
      descent: booking.descent,
      hairColor: booking.hairColor,
      eyeColor: booking.eyeColor,
      height: booking.height,
      weight: booking.weight,
      ScarsMarksTattoos: booking.ScarsMarksTattoos,
      arrestDateTime: booking.arrestDateTime,
      arrestingAgency: booking.arrestingAgency,
      arrestLocation: booking.arrestLocation,
      arrestCharges: booking.arrestCharges,
      arrOffsDeptID: booking.arrOffsDeptID,
      transOffsDeptID: booking.transOffsDeptID,
      driversLicense: booking.driversLicense,
      vehicle: booking.vehicle,
      specialID: booking.specialID,
      gangAffiliation: booking.gangAffiliation,
      deptReportNum: booking.deptReportNum,
      bkDateTime: booking.bkDateTime,
      bkClerksDeptID: booking.bkClerksDeptID,
      srchOffsDeptID: booking.srchOffsDeptID,
      arrestBail: booking.arrestBail,
      property: booking.property,
      bookingNumber: booking.bookingNumber,
      emergencyContact: booking.emergencyContact,
      occupation: booking.occupation,
      skills: booking.skills,
      highGrdCpl: booking.highGrdCpl,
      enAbility: booking.enAbility,
      employer: booking.employer,
      medicalInfo: booking.medicalInfo,
      observation: booking.observation,
      separationRequired: booking.separationRequired,
      comments: booking.comments,
    };
    await Booking.findOneAndUpdate({ deptID }, update, { new: true });
  }

  static async deleteBooking({ bookingNumber }) {
    await Booking.findOneAndDelete({ bookingNumber });
  }
}

export default BookingService;
