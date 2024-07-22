// Import necessary modules and functions
import UserModel from '@/models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectDb } from '@/config/dbConnection';
import { NextResponse } from 'next/server';

// Establish a connection to the database
connectDb();

export async function POST(request) {
    try {
        // Parse the request body to extract email and password
        const { email, password } = await request.json();

        // Check if both email and password are provided
        if (!email || !password) {
            return NextResponse.json({ Success: false, message: 'All fields are required' }, { status: 400 });
        }

        // Find the user in the database by email
        const user = await UserModel.findOne({ email });

        // If the user is not found, return an error response
        if (!user) {
            return NextResponse.json({ Success: false, message: 'User not found' }, { status: 400 });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        // If the password does not match, return an error response
        if (!isMatch) {
            return NextResponse.json({ Success: false, message: 'Invalid credentials' }, { status: 400 });
        }

        // Generate a JWT token if the password matches
        const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });

        // Return a success response with the generated token
        return NextResponse.json({ Success: true, message: 'Login Success', token }, { status: 200 });

    } catch (error) {
        // Log the error and return an internal server error response
        // console.error(error);
        return NextResponse.json({ status: 'failed', message: 'Unable to login' }, { status: 500 });
    }
}


// export async function handler(req, res) {
//     // Allow only POST method
//     if (req.method !== 'POST') {
//         return NextResponse.json({ status: 'failed', message: 'Method not allowed' }, { status: 405 });
//     }
// }



