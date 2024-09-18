import { User } from "../models/User.models.js";
import { generateOtp, sendEmail } from "../utils/otpUtils.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
let otps = {};

const checkEmaiAndSendOtp = async (req, res) => {

    const { email } = req.body
    console.log(email);
    try {
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json(new ApiError(400, "This email is already registered"));
           
        }

        const otp = generateOtp();
        otps[email] = otp

        await sendEmail(email, otp)
        return res.status(200).json(new ApiResponse(200, {otp},"OTP sent to your email."));
        
    } catch (error) {
        console.error("Error in checkEmailAndSendOtp:", error);
        return res.status(500).json(new ApiError(500, "Server error. Please try again later."));
        
    }
}

export default checkEmaiAndSendOtp