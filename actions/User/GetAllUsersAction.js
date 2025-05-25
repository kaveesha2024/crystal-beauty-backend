import User from "../../model/User.js";

const GetAllUsersAction = async (request, response) => {
    if (!request.user) {
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }
    if (request.user.role !== 'admin') {
        response.json({
            status: 401,
            message: "Unauthorized",
        });
        return;
    }
    try {
        const allUsers = await User.find();
        response.json({
            status: 200,
            message: allUsers
        });
    } catch (error) {
        response.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};
export default GetAllUsersAction;