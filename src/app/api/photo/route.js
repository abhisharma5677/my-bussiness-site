import { connectDb } from "@/helper/dbConnection";
import { NextResponse } from "next/server";
import { Photo } from "@/models/photoSchema";


connectDb();


//Create Photos in the database........
export async function POST(request){

    try{

        const { message , myFile } = await request.json();

        const newPhoto = new Photo({
            message,
            myFile,
        }) 

        const createPhoto = await newPhoto.save();

        console.log("Post API called succesfully...");

        return NextResponse.json(createPhoto,{
            status:201
        })

    }catch(error){
        console.log(error);

        return NextResponse.json({
            message:"failed to create photo...",
            success:false,
        })
    }

}



//API to get information about all the photos.....
export async function GET(request){
    let photoData = [];
    try{

        photoData = await Photo.find();
        return NextResponse.json(photoData,{
            message:"Data get successfully...",
            status:201,
        }) 
        console.log("Get API called successfully.....")

    }catch(error){

        console.log(error);
        return NextResponse.json({
            message:"Error in get request !!",
        })

    }
}


