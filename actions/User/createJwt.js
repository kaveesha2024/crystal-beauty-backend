import User from '../../model/User.js';
import jwt from 'jsonwebtoken';

const getJsonWebToken = async (user, response) => {
    const signupUser = await User.findOne({ email: user.email });
    if (!signupUser) {
        response.json({
            status: 500,
            message: 'Internal Server Error',
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
        'secret'
    );
    response.json({
        status: 200,
        token: token,
        user: signupUser,
    });
};
export default getJsonWebToken;
