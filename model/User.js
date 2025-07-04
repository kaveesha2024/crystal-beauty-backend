import mongoose from "mongoose";
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
            length: 10,
            nullable: true,
            unique: false,
        },
        address: {
            type: String,
            unique: false,
            nullable: true,
        },
        profilePicture: {
            type: String,
            required: true,
            default: "https://i.pinimg.com/736x/2f/15/f2/2f15f2e8c688b3120d3d26467b06330c.jpg",
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
