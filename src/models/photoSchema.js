import mongoose, { Schema } from "mongoose";

const PhotoSchema = new Schema({
    message:String,
    myFile:String,
})

export const Photo = mongoose.models.photos || mongoose.model("photos" , PhotoSchema);
