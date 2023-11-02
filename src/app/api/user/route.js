import { NextResponse } from "next/server";
import dbConnect from '../../../helper/database'
import User from '../../../models/user'

export async function GET() {

    //   await dbConnect();

    return NextResponse.json({ msg: "success" });
}


export async function POST(req) {
    const body = await req.json();
    await dbConnect();
    const user = await User.create(body)

    return NextResponse.json({ msg: "success", data: user });
}