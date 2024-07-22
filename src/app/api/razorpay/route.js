import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

// console.log("RAZORPAY_API_KEY:", process.env.RAZORPAY_API_KEY);
// console.log("RAZORPAY_API_SECRET:", process.env.RAZORPAY_API_SECRET);

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

export async function GET() {
    try {
        const payment_capture = 1;
        const amount = 1 * 100; // amount in paisa. In this case, it's INR 1
        const currency = "INR";
        const options = {
            amount: (amount).toString(),
            currency,
            receipt: shortid.generate(),
            payment_capture,
            notes: {
                paymentFor: "testingDemo",
                userId: "100",
                productId: 'P100'
            }
        };

        const order = await instance.orders.create(options);
        console.log("Order created:", order); // Log the order object

        if (!order) {
            throw new Error("Order creation failed");
        }

        return NextResponse.json({ msg: "success", order, success: true });
    } catch (error) {
        console.error("Error creating order:", error); // Log the error
        return NextResponse.json({ msg: "error", error: error.message, success: false }, { status: 500 });
    }
}
