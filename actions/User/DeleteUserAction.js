import { isAdmin, isBodyNull, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import User from "../../model/User.js";

const DeleteUserAction = async (request, response) => {
    if (isUserNull(request.user) || !isAdmin(request.user?.role)) {
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }
    if (!request.query?.userId) {
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    try {
        const res = await User.deleteOne({ userId: request.query?.userId });
        if (res){
            response.json({
                status:200,
                message: "User deleted"
            });
        }
    }catch (error) {
        response.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};
export default DeleteUserAction;