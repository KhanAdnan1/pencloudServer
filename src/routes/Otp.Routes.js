import {Router} from "express";
import checkEmaiAndSendOtp from "../controllers/OTP.controller.js";

const router =Router()
router.route("/register/send-otp").post(checkEmaiAndSendOtp)
//router.post("/register/send-otp",checkEmaiAndSendOtp)
export default router;