import VerifyEmailAction from "../actions/verify/VerifyEmailAction.js";
import StoreOtpAction from "../actions/verify/StoreOtpAction.js";

export const VerifyEmailController = async (request, response) => {
    await VerifyEmailAction(request, response);
};
export const StoreOtp = async (request, response) => {
    await StoreOtpAction(request, response);
};
