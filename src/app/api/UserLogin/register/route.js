import UserModel from "@/models/userModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectDb } from "@/config/dbConnection";
import { NextResponse } from "next/server";


// Handle the registration API request
export async function POST(request) {


    // Ensure the database connection is established
    connectDb();


    try {
        const { name, email, password, password_confirmation, tc } = await request.json();
        // console.log('Request Data:', { name, email, password, tc });

        // Check if the user already exists
        const user = await UserModel.findOne({ email });
        if (user) {
            return NextResponse.json({ Success: false, message: 'Email already exists' }, { status: 400 });
        }

        // Validate the input fields
        if (!name || !email || !password || !password_confirmation || !tc) {
            return NextResponse.json({ Success: false, message: 'All fields are required' }, { status: 401 });
        }

        // Check if password and confirmation match
        if (password !== password_confirmation) {
            return NextResponse.json({ Success: false, message: "Password and Confirm Password doesn't match" }, { status: 402 });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Save the new user to the database
        const newUser = new UserModel({ name, email, password: hashPassword, tc });
        await newUser.save();

        // Generate a JWT token
        const saved_user = await UserModel.findOne({ email });
        const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' });

        // Respond with success
        return NextResponse.json({ Success: true, message: 'Registration Success', token }, { status: 201 });

    }
    catch (error) {
        // console.error(error);
        return NextResponse.json({ Success: false, message: 'Unable to Register' }, { status: 500 });
    }
}

// Handle methods other than POST
// export async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return NextResponse.json({ status: 'failed', message: 'Method not allowed' }, { status: 405 });
//     }
// }

