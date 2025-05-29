import { isBodyNull, isUserNull } from "../../utility/refactor/refactor.js";
import Otp from "../../model/Otp.js";
import User from "../../model/User.js";

const VerifyEmailAction = async (request, response) => {
    if (isUserNull(request.user) || isBodyNull(request.body)){
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }
    try {
        const validOtp = await Otp.findOne({email: request.body?.email, otp: request.body?.otp});
        if (validOtp && validOtp.otp == request.body?.otp) {
            await User.updateOne({email: request.body?.email}, {isVerified: true});
            response.json({
                status: 200,
                message: "Email verified",
            });
            return;
        }
        response.json({
            status: 401,
            message: "Your Otp is not valid and Email not verified successfully"
        });
    }catch (error) {
        response.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};
export default VerifyEmailAction;
