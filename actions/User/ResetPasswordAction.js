import Otp from "../../model/Otp.js";
import bcrypt from "bcrypt";
import User from "../../model/User.js";

const ResetPasswordAction = async (request, response) => {
    if (!request.body.newPassword||!request.body.otp){
        response.json({status: 422, message: "Unprocessable content"});
        return;
    }
    try {
        const otp = await Otp.findOne({otp: request.body.otp});
        if (otp===null){
            response.json({status:401, message: "This OTP is invalid"});
            return;
        }
        const hashedPassword = bcrypt.hashSync(request.body.newPassword, 10);
        await User.updateOne({password: hashedPassword});
        await Otp.deleteOne({otp: request.body.otp})
        response.json({status: 200, message: "Password changed successfully."});
    } catch (e) {
        response.json({status: 500, message: "Internal server error"});
    }

};
export default ResetPasswordAction;