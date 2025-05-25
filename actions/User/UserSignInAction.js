import User from "../../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const UserSignInAction = async (request, response) => {
    if (request.body === null) {
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    if (
        request.body?.email === "" ||
        request.body?.password === ""
    ){
        response.json({
            status: 422,
            message: 'email or password is empty',
        });
        return;
    }
    const user = request.body;
    try {
        const validUser = await User.findOne({ email:user.email });
        if (!validUser) {
            response.json({
                status: 404,
                message: 'user not found',
            });
            return;
        }
        const isPasswordCorrect = bcrypt.compareSync(user.password, validUser.password);
        if (!isPasswordCorrect) {
            response.json({
                status: 401,
                message: "Incorrect password",
            });
            return;
        }
        const token = jwt.sign({
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            isVerified: user.isVerified,
            phoneNumber: user.phoneNumber,
            address: user.address,
            profilePicture: user.profilePicture,
            isBlocked: user.isBlocked,

        }, process.env.JWT_KEY);
        response.json({
            status: 200,
            token: token,
            user: validUser,
        });
    }catch (error) {
        response.json({
            status: 500,
            message: "Internal Server Error",
        });
    }

};
export default UserSignInAction;