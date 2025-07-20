import User from "../../model/User.js";
import Otp from "../../model/Otp.js";
import { isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";

const StoreOtpAction = async (request, response) => {
    const { email } = request.body;
    if (isUserNull(request.user)){
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }
    if (email === "" || email === null) {
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    try {
        const validUser = await User.findOne({ email: email });
        if (!validUser) {
            response.json({
                status: 404,
                message: "Email not found",
            });
            return;
        }
//
        const otp = request.body?.otp;
        try {
            const newOtp = new Otp({
                otp: otp,
                email: email,
            });
            const res = await newOtp.save();
            if (!res) {
                response.json({
                    status: 500,
                    message: "could not store otp in the db",
                });
                return;
            }
            response.json({
                status: 200,
                message: "Otp sent",
                otp: otp,
            });
        } catch (err) {
            response.json({
                status: 500,
                message: "Internal Server Error",
            });
        }
    } catch (err) {
        response.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};
export default StoreOtpAction;
