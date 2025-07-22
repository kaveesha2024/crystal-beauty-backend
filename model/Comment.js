import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    userId: {
        required: true,
        type: String,
    },
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    profilePicture: {
       required: true,
       type: String,
    },
    comment: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required:true,
    }
});
const Comment = mongoose.model('comment', commentSchema);
export default Comment;