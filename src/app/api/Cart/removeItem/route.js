import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectDb } from '@/config/dbConnection';
import UserModel from '@/models/userModel';
import { CartModel } from '@/models/cartModel';

// Connect to the database
connectDb();

export async function POST(request) {
    try {
        // Extract authorization header
        const authHeader = request.headers.get('authorization');
        if (!authHeader) {
            return NextResponse.json({ success: false, message: 'Authorization header is missing' }, { status: 401 });
        }

        // Verify JWT token
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const userId = decoded.userID;

        // Parse request body
        const { cartItemId } = await request.json();

        // Find the user by ID
        const user = await UserModel.findById(userId);
        
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        // Remove the cart item from the user's cartItems array
        user.cartItems = user.cartItems.filter(item => item.toString() !== cartItemId);
        await user.save();

        // Remove the cart item from the CartModel
        await CartModel.findByIdAndDelete(cartItemId);

        return NextResponse.json({ success: true, message: 'Item removed from cart successfully' }, { status: 200 });
    } 
    catch (error) {
        // console.error('Error removing item from cart:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
