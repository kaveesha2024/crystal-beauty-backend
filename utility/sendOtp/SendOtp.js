import transporter from "../transporter/transporter.js";
import Otp from "../../model/Otp.js";
import dotenv from "dotenv";
dotenv.config();

const SendOtp = async (otp, email, message) => {
    try {
        const info = await transporter.sendMail({
            from: `"Crystal Beauty Clear" <${process.env.EMAIL}>`,
            to: email,
            subject: "Your OTP Code for Verification",
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #fafafa;">
              <h2 style="color: #333;">Email Verification - Crystal Beauty Clear</h2>
              <p style="font-size: 16px; color: #555;">${message}</p>
              <div style="font-size: 28px; font-weight: bold; color: #007bff; margin: 20px 0;">${otp}</div>
              <p style="font-size: 14px; color: #999;">If you didn’t request this, you can safely ignore this email.</p>
            </div>
        `,
        });
        if (!info.messageId){
            return 500;
        }
        try {
            await Otp.deleteMany({ email });
            const newOtp = new Otp({
                otp,
                email,
            });
            await newOtp.save();
            return 200;
        }catch (e) {
            return 500;
        }
    }catch (e) {
        return 500;
    }
};
export default SendOtp;