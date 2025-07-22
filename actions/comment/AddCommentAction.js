import { isAdmin, isBodyNull, isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";
import Comment from "../../model/Comment.js";

const AddCommentAction = async (request, response) => {
    console.log(request.body);
    if (isUserNull(request.user)){
        response.json({ status: 401, message: "Try to login first" });
        return;
    }
    if (isBodyNull(request.body)){
        response.json({
            status: 422,
            message: "Unprocessable entity",
        });
        return;
    }
    const {comment, productId} = request.body;
    const user = request.user;
    if (!comment||!productId) response.json({status: 422, message: "Unprocessable entity"})
    console.log('methanath hariii');
    const newComment = new Comment({
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        profilePicture: user.profilePicture,
        comment,
        productId,
    });
    try{
        await newComment.save();
        response.json({status: 200, message: "Your Comment was submitted."});
    }catch(e){
        console.log(e);
        response.json(e)
    }
};
export default AddCommentAction;