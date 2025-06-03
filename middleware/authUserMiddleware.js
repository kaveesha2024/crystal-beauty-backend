import jwt from "jsonwebtoken";
const AuthUserMiddleware = async (request, response, next) => {
    const header = request.headers.authorization;
    if (!header) {
        next();
        return;
    }
    const token = header.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
        if (error) {
            response.json({
                status: 401,
                message: "Unauthorized",
            });
            return;
        }
        request.user = decoded;
        next();
    });

};
export default AuthUserMiddleware;