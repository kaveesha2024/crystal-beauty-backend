import VerifyEmailAction from "../actions/verify/VerifyEmailAction.js";
import GetOtpAction from "../actions/verify/GetOtpAction.js";

export const VerifyEmailController = async (request, response) => {
    await VerifyEmailAction(request, response);
};
export const GetOtpController = async (request, response) => {
    await GetOtpAction(request, response);
};
