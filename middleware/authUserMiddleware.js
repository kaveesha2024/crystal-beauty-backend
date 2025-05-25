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
        // {
        //   userId: 'CBCU2095102530',
        //   firstName: 'Kaveesha',
        //   lastName: 'Sashen',
        //   email: 'sanaakaveesha@gmail.com',
        //   role: 'admin',
        //   isVerified: false,
        //   phoneNumber: '0740859676',
        //   address: '265/A Sri Subadrarama RD, Attiligoda, Galle',
        //   profilePicture: 'https://i.pinimg.com/736x/2f/15/f2/2f15f2e8c688b3120d3d26467b06330c.jpg',
        //   isBlocked: false,
        //   iat: 1748178652
        // }
        request.user = decoded;
        next();
    });

};
export default AuthUserMiddleware;