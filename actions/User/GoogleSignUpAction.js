import axios from "axios";
import User from "../../model/User.js";
import random from "../../utility/random/random.js";
import bcrypt from "bcrypt";
import getJsonWebToken from "../../utility/createJwt/createJwt.js";
import dotenv from "dotenv";
dotenv.config()

const GoogleSignUpAction = async (request, response) => {
    const token = request.query.accessToken;
    if (!token) {
        response.json({
            status: 400,
            message: "Bad Request",
        });
        return;
    }
    try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        let newUserId = "";
        console.log(newUserId);
        try {
            const existingUser = await User.findOne({ email: res.data.email });
            if (existingUser == null) {
                let findExistingUserId
                do {
                    try {
                        newUserId = "CBCU" + random(10);
                        findExistingUserId = await User.find({ userId: newUserId });
                    } catch (error) { }
                } while (findExistingUserId === null);
                const user = new User({
                    userId: newUserId,
                    firstName: res.data.given_name,
                    lastName: res.data.family_name,
                    email: res.data.email,
                    password: bcrypt.hashSync(process.env.GOOGLE_SIGNUP_PASSSOWRD,10),
                    role: "user",
                    isVerified: true,
                    profilePicture: res.data.picture,
                });
                try {
                    const savedUser = await user.save();
                    console.log('saveduser', savedUser);
                    if (savedUser){
                        await getJsonWebToken(savedUser, response)
                        return
                    }
                    response.json({
                        status: 500,
                        message: 'Something went wrong!'
                    })
                }catch (e){
                    response.json({
                        status: 500,
                        message: 'Something went wrong!'
                    })
                }
            }
            response.json({
                status: 422,
                message: "You have already sign up. Try to sign in !"
            });
        }catch (e) {
            response.json({
                status: 500,
                message: 'Something went wrong!'
            })
        }
    } catch (error) {
        response.json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};
export default GoogleSignUpAction;