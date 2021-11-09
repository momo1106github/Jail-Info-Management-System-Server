import { Router } from "express";
import BookingService from "../../services/BookingService";

const router = Router();

// /api/booking/
router.get("/", (req, res) => {
  console.log(req.body);

  const { bookingNumber } = req.body;
  BookingService.getBooking({ bookingNumber })
    .then((booking) => {
      console.log("Booking Information:\n", booking);
      res.status(200).send(booking);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("BOOKING_INFORMATION_NOT_EXISTS");
    });
});

// /api/booking
router.post("/", (req, res) => {
  console.log(req.body);

  const { deptID, booking } = req.body;
  BookingService.upsertBooking({ deptID, booking })
    .then(() => {
      console.log("Booking upserted:", booking);
      res.status(200).send("BOOKING UPSERT SUCCESS");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
});

// /api/booking
router.delete("/", (req, res) => {
  console.log(req.body);

  const { bookingNumber } = req.body;
  BookingService.deleteBooking({ bookingNumber })
    .then(() => {
      console.log("Booking deleted:", bookingNumber);
      res.status(200).send("BOOKING DELETE SUCCESS");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
});

// /api/booking/daily-log
router.get("/daily-log", (req, res) => {
  BookingService.getDailyLog()
    .then((dailyLog) => {
      console.log("Daily Booking Log:\n", dailyLog);
      res.status(200).send(dailyLog);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
