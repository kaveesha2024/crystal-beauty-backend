import mongoose from "mongoose";
const otpSchema = new mongoose.Schema({
    otp: {
        type: String,
        required: true,
        length: 6,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
});
const Otp = mongoose.model("Otps", otpSchema);
export default Otp;
