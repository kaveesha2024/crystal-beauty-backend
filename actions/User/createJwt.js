import User from '../../model/User.js';
import jwt from 'jsonwebtoken';

const getJsonWebToken = async (user, response) => {
    const signupUser = await User.findOne({ email: user.email });
    if (!signupUser) {
        response.json({
            status: 404,
            message: 'user not found',
        });
        return;
    }
    const {
        userId,
        firstName,
        lastName,
        email,
        password,
        role,
        isVerified,
        phoneNumber,
        address,
        profilePicture,
        isBlocked,
    } = signupUser;
    const token = jwt.sign(
        {
            userId,
            firstName,
            lastName,
            email,
            password,
            role,
            isVerified,
            phoneNumber,
            address,
            profilePicture,
            isBlocked,
        },
        process.env.JWT_KEY
    );
    response.json({
        status: 200,
        token: token,
        user: signupUser,
    });
};
export default getJsonWebToken;
