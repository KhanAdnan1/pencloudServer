import express from "express";
import checkEmaiAndSendOtp from "../controllers/OTP.controller.js";

const router =express.Router()
router.post("/register/send-otp",checkEmaiAndSendOtp)
export default router;