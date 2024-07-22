import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { connectDb } from '@/config/dbConnection';
import UserModel from '@/models/userModel';
import { CartModel } from '@/models/cartModel';



// Connect to the database
connectDb();


// GET request handler for fetching cart items of a user
export async function GET(request) {
    try {
        // Extract authorization header
        const authHeader = request.headers.get('authorization');
        if (!authHeader) {
            return NextResponse.json({ message: 'Authorization header is missing' }, { status: 401 });
        }

        // Verify JWT token
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const userId = decoded.userID;

        // Find the user by ID and populate cartItems
        const user = await UserModel.findById(userId).populate('cartItems');
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ cartItems: user.cartItems }, { status: 200 });
    } 
    catch (error) {
        // console.error('Error fetching cart items:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}


