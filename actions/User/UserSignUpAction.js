import User from '../../model/User.js';
import random from '../../utility/random/random.js';
import bcrypt from 'bcrypt';
const UserSignUpAction = async request => {
    // const { body } = request;
    // if (request.body === null) {
    //     return {
    //         status: 400,
    //         message: 'Bad Request',
    //     };
    // }
    //
    // if (
    //     body?.password === '' ||
    //     body?.email === '' ||
    //     body?.address === '' ||
    //     body?.phoneNumber === '' ||
    //     body?.firstName === '' ||
    //     body?.lastName === ''
    // ) {
    //     return {
    //         status: 422,
    //         message: 'Unprocessable Content',
    //     };
    // }
    //
    // const user = request.body;
    // let newUserId = '';
    // let res = null;
    //
    // do {
    //     try {
    //         newUserId = 'CBCU' + random(10);
    //         res = await User.find({ userId: newUserId });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // } while (res !== null);
    //
    // const hashedPassword = bcrypt.hashSync(user.password, 10);
    //
    // const newUser = new User({
    //     userId: newUserId,
    //     email: user.email,
    //     password: hashedPassword,
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     phoneNumber: user.phoneNumber,
    //     address: user.address,
    //     profilePicture: user.profilePicture,
    // });
    // try {
    //     const response = await newUser.save();
    //     if (response) {
    //         return {
    //             status: 201,
    //             message: 'User created successfully',
    //         };
    //     }
    //     return {
    //         status: 500,
    //         message: 'Internal Server Error',
    //     };
    // } catch (error) {
    //     console.log(error);
    // }
};
export default UserSignUpAction;
