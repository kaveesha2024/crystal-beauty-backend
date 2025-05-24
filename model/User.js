import mongoose from "mongoose";
//firstName, lastName, email, password, role, isVerified, phoneNumber, address, profilePicture, isBlocked
const userSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: false,
            nullable: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "admin"],
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
            nullable: true,
            length: 10,
        },
        address: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            required: true,
            default: "https://i.sstatic.net/l60Hf.png",
        },
        isBlocked: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model("Users", userSchema);
export default User;
