import random from "../../utility/random/random.js";
import { isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import dotenv from "dotenv";
import SendOtp from "../../utility/sendOtp/SendOtp.js";
import User from "../../model/User.js";
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
    const user = await User.findOne({email: request.body.email});
    if (!user) {
        const emailCode = random(6);
        const message = "Use the OTP below to verify your email address. This code is valid for 5 minutes.";
        const res = await SendOtp(emailCode, request.body.email, message);
        if (res===200){
            response.json({status: 200, message: "OTP sent to your email address"});
        }else {
            response.json({status: 500, message: "Internal server error"});
        }
    }else {
        response.json({
            status: 401,
            message: "This email is already registered"
        });
    }


};
export default SendOtpAction;