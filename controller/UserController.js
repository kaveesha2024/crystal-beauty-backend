import UserSignupAction from '../actions/User/UserSignUpAction.js';

export const UserSignUpController = async (request, response) => {
    await UserSignupAction(request, response);
};
//status: 400, 406, 422,  500,
//messages: 'Bad Request', 'Unprocessable Content', 'Internal Server Error',
// 'Address already exists', 'Phone number already exists', 'Email already exists',

//all parts are done, requests validated, failed validations will send a JSON response.
