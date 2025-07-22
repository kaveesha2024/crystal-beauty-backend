import User from "../../model/User.js";
import random from "../../utility/random/random.js";
import SendOtp from "../../utility/sendOtp/SendOtp.js";

const ForgetPasswordSendOtpAction = async (request, response) => {
    if (request.body.email===""){
        response.json({status: 422, message: "Please provide email address"});
        return;
    }
    const user = await User.findOne({email: request.body.email});
    if (!user){
        response.json({status: 404, message: "This email is not registered"});
        return;
    }
    const otp = random(6);
    const message = "Use the OTP below to continue your password resetting task.";
    const res = await SendOtp(otp, request.body.email, message);
    if (res===200){
        response.json({status: 200, message: "OTP sent to your email address"});
    }else {
        response.json({status: 500, message: "Internal server error"})
    }
};
export default ForgetPasswordSendOtpAction;