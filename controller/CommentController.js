import AddCommentAction from "../actions/comment/AddCommentAction.js";
import GetCommentsByProductIdAction from "../actions/comment/GetCommentsByProductIdAction.js";
import DeleteCommentByIdAction from "../actions/comment/DeleteCommentByIdAction.js";

export const AddComment = async (req, res) => {
    await AddCommentAction(req, res);
};
export const getCommentsByProductId = async (request, response) => {
    await GetCommentsByProductIdAction(request, response);
}
export const deleteCommentById = async (request, response) => {
    await DeleteCommentByIdAction(request, response)
}