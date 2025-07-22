import VerifyEmailAction from "../actions/verify/VerifyEmailAction.js";
import StoreOtpAction from "../actions/verify/StoreOtpAction.js";
import SendOtpAction from "../actions/verify/SendOtpAction.js";
import ForgetPasswordSendOtpAction from "../actions/verify/ForgetPasswordSendOtpAction.js";

export const VerifyEmailController = async (request, response) => {
    await VerifyEmailAction(request, response);
};
export const StoreOtp = async (request, response) => {
    await StoreOtpAction(request, response);
};
export const sendOtp = async (request, response) => {
    await SendOtpAction(request, response);
}
export const ForgetPasswordSendOtp = async (request, response) => {
    await ForgetPasswordSendOtpAction(request, response);
}