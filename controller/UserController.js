import random from '../utility/random/random.js';
import User from '../model/User.js';
import bcrypt from 'bcrypt';

export const SignUpController = async (request, response) => {
    const { body } = request;
    if (request.body === null) {
        response.json({
            status: 400,
            message: 'Bad Request',
        });
        return;
    }

    if (
        body?.password === '' ||
        body?.email === '' ||
        body?.address === '' ||
        body?.phoneNumber === '' ||
        body?.firstName === '' ||
        body?.lastName === ''
    ) {
        response.json({
            status: 422,
            message: 'Unprocessable Content',
        });
        return;
    }

    const user = request.body;

    let newUserId = '';
    let res = null;

    const email = await User.find({ email: user.email });
    if (email) {
        return response.json({
            status: 406,
            message: 'Email already exists',
        });
    }

    do {
        try {
            newUserId = 'CBCU' + random(10);
            console.log(newUserId);
            res = await User.find({ userId: newUserId });
        } catch (error) {
            console.log(error);
        }
    } while (res == null);

    const hashedPassword = bcrypt.hashSync(user.password, 10);

    const newUser = new User({
        userId: newUserId,
        email: user.email,
        password: hashedPassword,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        address: user.address,
        profilePicture: user.profilePicture,
    });
    try {
        const res = await newUser.save();
        if (res) {
            response.json({
                status: 201,
                message: 'User created successfully',
            });
            return;
        }
        response.json({
            status: 500,
            message: 'Internal Server Error',
        });
    } catch (error) {
        console.log(error);
    }
};
