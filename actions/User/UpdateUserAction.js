import { isAdmin, isBodyNull, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import User from "../../model/User.js";

const UpdateUserAction = async (request, response) => {
    if (isUserNull(request.user) || isBodyNull(request.body)) {
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }
    if (!request.query?.id) {
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    const id = request.query?.id;
    const user = request.body;
    try {
        const res = await User.updateOne({ userId: id }, {
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
            profilePicture: user.profilePicture,
            isBlocked: user.isBlocked,
            isVerified: user.isVerified,
            role: user.role,
            email: user.email,
        });
        if (!res) {
            response.json({
                status: 500,
                message: "could not update user",
            });
            return;
        }
        response.json({
            status: 200,
            message: "user updated",
        });
    } catch (error) {
        response.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};
export default UpdateUserAction;