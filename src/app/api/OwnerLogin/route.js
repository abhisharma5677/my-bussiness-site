import { connectDb } from "@/helper/dbConnection";
import { NextResponse } from "next/server";
import { Owner } from "@/models/ownerModel";

connectDb();

//handle login || (Check login info) || POST
export async function POST(request) {

    try {

        const { email, password } = await request.json();

        //Validation
        if (!email || !password) {
            return NextResponse.json({
                success: false,
                message: "Enter correct email or password !!",
                status: 401,
            })
        }

        //Check if the provided email is present or not 
        const owner = await Owner.findOne({ email });
        if (!owner) {
            return NextResponse.json({
                success: false,
                message: "Email is not registered !!",
                status: 401,
            })
        }

        //Check if provided password is correct or not...
        const passwordMatch = (password === owner.password);
        if (!passwordMatch) {
            return NextResponse.json({
                success: false,
                message: "Invalid email or password !!",
                status: 401,
            })
        }

        //Now everything is alright, so we can return user..
        return NextResponse.json({
            success: true,
            message: "Login Successfully...",
            status: 201,
            owner,
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Error while login !!",
            success: false,
            status: 404,
        })
    }

}