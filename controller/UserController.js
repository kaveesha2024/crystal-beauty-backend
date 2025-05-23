import UserSignupAction from "../actions/User/UserSignUpAction.js";
import VerifyEmailAction from "../actions/verify/VerifyEmailAction.js";
import { request } from "express";

export const UserSignUpController = async (request, response) => {
    await UserSignupAction(request, response);
};
//status: 400, 406, 422,  500,
//messages: 'Bad Request', 'Unprocessable Content', 'Internal Server Error',
// 'Address already exists', 'Phone number already exists', 'Email already exists',
// "Phone number must be 10 digits"

//all parts are done, requests validated, failed validations will send a JSON response.
