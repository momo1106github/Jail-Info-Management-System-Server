import { tsCallSignatureDeclaration } from "@babel/types";
import { Router } from "express";
import test from "../../models/Test";
import userRouter from "./user";
import bookingRouter from "./booking";

const router = Router();

router.use("/user", userRouter);
router.use("/booking", bookingRouter);

export default router;
