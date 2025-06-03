import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    products: {
        type: [{
            productId: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
            price: {
                type: Number,
                required: true,
            },
            productName: {
                type: String,
                required: true,
            }
        }],
        required: true,
        default: [],
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "pending",
        enum: ["pending", "delivered", "cancelled"],
    },
    orderId: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "cashOnDelivery",
        enum: ["cashOnDelivery", "creditCard", "paypal"],
    },
}, { timestamps: true });
const Order = mongoose.model('Orders', orderSchema);
export default Order;