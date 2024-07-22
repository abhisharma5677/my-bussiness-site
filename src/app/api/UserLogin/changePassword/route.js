import UserModel from '@/models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectDb } from '@/config/dbConnection';
import { NextResponse } from 'next/server';

// Establish a connection to the database
connectDb();

export async function POST(request) {

    try {
        const { password, password_confirmation } = await request.json();

        const authorizationHeader = request.headers.get('Authorization');
        if (!authorizationHeader) {
            return NextResponse.json({ status: 'failed', message: 'Authorization header missing' }, { status: 401 });
        }

        const token = authorizationHeader.split(' ')[1];
        if (!token) {
            return NextResponse.json({ status: 'failed', message: 'Token missing' }, { status: 401 });
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        } catch (error) {
            return NextResponse.json({ status: 'failed', message: 'Invalid token' }, { status: 401 });
        }

        const user = await UserModel.findById(decoded.userID);
        if (!user) {
            return NextResponse.json({ status: 'failed', message: 'User not found' }, { status: 404 });
        }

        if (password && password_confirmation) {
            if (password !== password_confirmation) {
                return NextResponse.json({ status: 'failed', message: "Password and Confirm Password don't match" }, { status: 400 });
            } else {
                const salt = await bcrypt.genSalt(10);
                const newHashPassword = await bcrypt.hash(password, salt);
                await UserModel.findByIdAndUpdate(user._id, { password: newHashPassword });
                return NextResponse.json({ status: 'success', message: 'Password Reset Successfully' }, { status: 200 });
            }
        } else {
            return NextResponse.json({ status: 'failed', message: 'All Fields are Required' }, { status: 400 });
        }
    } catch (error) {
        // console.error(error);
        return NextResponse.json({ status: 'failed', message: 'Server Error' }, { status: 500 });
    }
}
