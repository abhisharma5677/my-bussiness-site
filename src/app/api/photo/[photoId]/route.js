import { NextResponse } from "next/server";
import {Photo} from "@/models/photoSchema";
import {connectDb} from "@/helper/dbConnection";

//Connect to the database...
connectDb();


export async function DELETE(request , {params} ){

    const {photoId} = params;

    try{

        await Photo.findByIdAndDelete(photoId);

        return NextResponse.json({
            message:"photo deleted successfully...",
            success:true,
            status:201,
        });

    }catch(error){
        return NextResponse.json({
            message:"Error in deleting the photo !!",
            success:false,
            status:500,
        });
    }

}