import mongoose, { Schema } from "mongoose";

const PhotoSchema = new Schema({
    message: String,
    myFile: String,
},
    { timestamps: true }
)

export const Photo = mongoose.models.photos || mongoose.model("photos", PhotoSchema);
