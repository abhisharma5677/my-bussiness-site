import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  tc: { type: Boolean, required: true },
  cartItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cart' }] // Reference to cart items
})

// Model
const UserModel = mongoose.models.User || mongoose.model("User", userSchema)

export default UserModel
