import AddCommentAction from "../actions/comment/AddCommentAction.js";

export const AddComment = async (req, res) => {
    await AddCommentAction(req, res);
};