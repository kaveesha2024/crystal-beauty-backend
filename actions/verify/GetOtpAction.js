import random from "../../utility/random/random.js";
import User from "../../model/User.js";
import Otp from "../../model/Otp.js";

const GetOtpAction = async (request, response) => {
    const { email } = request.body;
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

        const otp = random(6);
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
export default GetOtpAction;
