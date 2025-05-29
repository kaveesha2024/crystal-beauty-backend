import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
    },
    productName: {
        type: String,
        required: true,
    },
    labelledPrice: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount:  Number,
    stock: {
        type: Number,
        required: true,
    },
    warranty: {
        type: String,
        required: true,
        default: "",
    },
    alterNames: [String],
    description: {
        type: String,
        required: true,
        maxLength: 1000,
    },
    brand: {
        type: String,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
        required: true,
    },
    images: [String],
    // reviews: {
    //     type: [{
    //         comment: String,
    //         userId: String,
    //         reviewImages: [String],
    //         isHidden: {
    //             type: Boolean,
    //             default: true,
    //             required: true,
    //         },
    //     }],
    //     default: [],
    // }
}, { timestamps: true });
const Product = mongoose.model('Products', productSchema);
export default Product;