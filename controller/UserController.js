import UserSignupAction from "../actions/User/UserSignUpAction.js";
import UserSignInAction from "../actions/User/UserSignInAction.js";
import GetAllUsersAction from "../actions/User/GetAllUsersAction.js";

//status: 400, 406, 422,  500,
//messages: 'Bad Request', 'Unprocessable Content', 'Internal Server Error',
// 'Address already exists', 'Phone number already exists', 'Email already exists',
// "Phone number must be 10 digits"

//all parts are done, requests validated, failed validations will send a JSON response.
export const UserSignUpController = async (request, response) => {
    await UserSignupAction(request, response);
};

//input email and password only
//status: 400, 401, 404, 422, 500
export const UserSignInController = async (request, response) => {
  await UserSignInAction(request, response);
};

export const GetAllUsersController = async (request, response) => {
    await GetAllUsersAction(request, response);
}