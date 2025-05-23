import random from "../../utility/random/random.js";
import User from "../../model/User.js";
import Otp from "../../model/Otp.js";

const GetOtpAction = async (request, response) => {
    const { email } = request.body;
    console.log(email);
    if (email === "" || email === null) {
        console.log("email is empty");
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    console.log("email is not empty");
    try {
        console.log("trying to find user");
        const validUser = await User.findOne({ email: email });
        console.log(validUser.firstName);
        if (!validUser) {
            console.log("user not found");
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
