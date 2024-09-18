import nodemailer from "nodemailer";

const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();  // 4-digit OTP
};

const sendEmail = (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure:true,
        port:465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailoptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP is",
        text: `your 4 digit otp is ${otp}`

    }
    return transporter.sendMail(mailoptions);

}
export { generateOtp, sendEmail };