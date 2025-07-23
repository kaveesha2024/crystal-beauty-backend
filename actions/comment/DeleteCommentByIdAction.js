import Comment from "../../model/Comment.js";
import { isUserNull } from "../../utility/reUsableFunctions/reUsableFunctions.js";

const DeleteCommentByIdAction = async (request, response) => {
    if (isUserNull(request.user)){
        response.json({ status: 401, message: "Unauthorized" });
        return;
    }
    const { commentId } = request.query;
    if (!commentId){
        response.json({ status: 422, message: "Comment id is missing!" });
        return;
    }
    try{
        const comment = await Comment.findOne({ _id: commentId, userId: request.user.userId });
        if (comment===null){
            response.json({ status: 404, message: "Unable to get your comment" });
            return;
        }
        await Comment.deleteOne({_id: commentId});
        response.json({
            status: 200,
            message: "Comment deleted successfully"
        });
    } catch (e) {
        response.json({
            status: 500,
            message: "Internal server error"
        });
    }

};
export default DeleteCommentByIdAction;