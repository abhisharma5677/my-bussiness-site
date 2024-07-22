import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectDb } from '@/config/dbConnection';
import UserModel from '@/models/userModel';
import { CartModel } from '@/models/cartModel';

// Connect to the database
connectDb();

// POST request handler for adding items to the cart
export async function POST(request) {
    try {
        // Extract authorization header
        const authHeader = request.headers.get('authorization');
        if (!authHeader) {
            return NextResponse.json({ Success: false, message: 'Authorization header is missing' }, { status: 401 });
        }

        // Verify JWT token
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const userId = decoded.userID;

        // Parse request body
        const { id, product, quantity } = await request.json();

        // Find the user by ID
        const user = await UserModel.findById(userId);
        if (!user) {
            return NextResponse.json({ Success: false, message: 'User not found' }, { status: 404 });
        }

        // Check if the item already exists in the user's cart
        const existingCartItem = await CartModel.findOne({ user: userId, product });

        if (existingCartItem) {
            // Item exists, increment its quantity
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
        } else {
            // Item does not exist, create new cart item
            const cartItem = new CartModel({ id, product, quantity, user: userId });
            await cartItem.save();

            // Add cart item reference to the user's cartItems array
            user.cartItems.push(cartItem._id);
            await user.save();
        }

        return NextResponse.json({ Success: true, message: 'Item added to cart successfully' }, { status: 200 });
    } 
    catch (error) {
        // console.error('Error adding item to cart:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
