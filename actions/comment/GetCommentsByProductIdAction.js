import Comment from "../../model/Comment.js";

const GetCommentsByProductIdAction = async (request, response) => {
    if (!request.query.productId){
        response.json({status: 422, message: "Product id is missing"});
        return;
    }
    const { productId } = request.query;
    try {
        const comments = await Comment.find({ productId });
        response.json({
            status: 200,
            message: comments
        });
    }catch (e) {
        response.json({
            status: 500,
            message: "Internal server error"
        });
    }
};
export default GetCommentsByProductIdAction;