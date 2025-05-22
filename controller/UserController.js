import UserSignupAction from '../actions/User/UserSignUpAction.js';

export const UserSignUpController = async (request, response) => {
    await UserSignupAction(request, response);
};
