import UserSignupAction from "../actions/User/UserSignUpAction.js";
import UserSignInAction from "../actions/User/UserSignInAction.js";
import GetAllUsersAction from "../actions/User/GetAllUsersAction.js";
import UpdateUserAction from "../actions/User/UpdateUserAction.js";
import DeleteUserAction from "../actions/User/DeleteUserAction.js";
export const UserSignUpController = async (request, response) => {
    await UserSignupAction(request, response);
};
export const UserSignInController = async (request, response) => {
  await UserSignInAction(request, response);
};
export const GetAllUsersController = async (request, response) => {
    await GetAllUsersAction(request, response);
}
export const UpdateUserController = async (request, response) => {
    await UpdateUserAction(request, response);
};
export const DeleteUserController = async (request, response) => {
    await DeleteUserAction(request, response);
}