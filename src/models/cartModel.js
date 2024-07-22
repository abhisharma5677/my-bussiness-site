import mongoose from 'mongoose';

// Define cart schema
const cartSchema = new mongoose.Schema({
    id: {type: Number , required:true},
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to user
});

// Create or retrieve cart model
export const CartModel = mongoose.models.cart || mongoose.model('cart', cartSchema);
