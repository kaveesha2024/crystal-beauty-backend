import User from '../../model/User.js';
import random from '../../utility/random/random.js';
import bcrypt from 'bcrypt';
import createJwtForSignupUser from './createJwt.js';
const UserSignupAction = async (request, response) => {
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

    const alreadyExistedEmail = await User.findOne({ email: user.email });
    if (!alreadyExistedEmail) {
        const phoneNumberAlreadyExisted = await User.findOne({ phoneNumber: user.phoneNumber });
        if (!phoneNumberAlreadyExisted) {
            const alreadyExistedAddress = await User.findOne({ address: user.address });
            if (!alreadyExistedAddress) {
                do {
                    try {
                        newUserId = 'CBCU' + random(10);
                        res = await User.find({ userId: newUserId });
                    } catch (error) {}
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
                        await createJwtForSignupUser(user, response);
                        return;
                    }
                    response.json({
                        status: 500,
                        message: 'Internal Server Error',
                    });
                } catch (error) {}
                return;
            }
            response.json({
                status: 406,
                message: 'Address already exists',
            });
            return;
        }
        response.json({
            status: 406,
            message: 'Phone number already exists',
        });
        return;
    }

    response.json({
        status: 406,
        message: 'Email already exists',
    });
};
export default UserSignupAction;
