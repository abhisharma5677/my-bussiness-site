import mongoose, { Schema } from "mongoose";

const OwnerSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
    },
    email: {
        type: String,
        required: [true, 'email required'],
    },
    password: {
        type: String,
        required: [true, 'Enter password'],
    },
}
)

export const Owner = mongoose.models.owners || mongoose.model("owners", OwnerSchema);