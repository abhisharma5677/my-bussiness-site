import { connectDb } from "@/helper/dbConnection";
import { NextResponse } from "next/server";
import { Owner } from "@/models/ownerModel";

connectDb();

//post user information || ( Send signup data ) || POST
export async function POST(request) {

    try {

        const { username, email, password } = await request.json();

        console.log(username);

        //Applying validation
        if (!username || !email || !password) {
            return NextResponse.json({
                success: false,
                message: "Please fill all the fields !!",
                status: 400,
            })
        }

        //Handling already existing user || on the basis of email
        const existingUser = await Owner.findOne({ email });
        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: "User already registered try another email !!",
                status: 401,
            })
        }


        // //hashing the password before sending to the database..
        // const hashedPassword = await bcrypt.hash(password , 10); 


        //After all the validations save the data to the database..
        const ownerData = new Owner({
            username,
            email,
            password,
        });

        await ownerData.save();

        return NextResponse.json({
            success: true,
            message: "New user registered successfully...",
            status: 201,
            ownerData,
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json(error, {
            message: "Error in the register callback !!",
            success: false,
            status: 500,
        })
    }

}


