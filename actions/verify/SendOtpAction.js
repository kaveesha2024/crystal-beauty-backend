import random from "../../utility/random/random.js";
import { isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import transporter from "../../utility/transporter/transporter.js";
import dotenv from "dotenv";
import Otp from "../../model/Otp.js";
dotenv.config()
const SendOtpAction = async (request, response) => {
    if (isUserNull(request.user)) {
        response.json({status: 401, message: "Try to login first"});
        return;
    }
    if (!request.body.email) {
        response.json({
            status: 404,
            message: "Email not found !"
        });
        return;
    }
    const emailCode = random(6);
    const info = await transporter.sendMail({
        from: `"Crystal Beauty Clear" <${process.env.EMAIL}>`,
        to: request.body.email,
        subject: "Your OTP Code for Verification",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #fafafa;">
              <h2 style="color: #333;">Email Verification - Crystal Beauty Clear</h2>
              <p style="font-size: 16px; color: #555;">Use the OTP below to verify your email address. This code is valid for 5 minutes.</p>
              <div style="font-size: 28px; font-weight: bold; color: #007bff; margin: 20px 0;">${emailCode}</div>
              <p style="font-size: 14px; color: #999;">If you didn’t request this, you can safely ignore this email.</p>
            </div>
        `,
    });
    if (!info.messageId){
        response.json({status: 500, message: "Something went wrong !!"});
        return;
    }
    try {
        await Otp.deleteMany({ email: request.body.email });
        const newOtp = new Otp({
            otp: emailCode,
            email: request.body.email,
        });
        await newOtp.save();
        response.json({status:200, message: "OTP Send"});
    }catch (e) {
        response.json({status: 500, message: "Something went wrong"})
    }

};
export default SendOtpAction;