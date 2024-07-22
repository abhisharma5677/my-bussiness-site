"use client";
import React, { Suspense, useContext } from "react";
import Buy from "./Buy";
import { useRouter } from 'next/navigation';
import Loading from "@/app/loading";
import AmountContext from "@/app/context/AmountContext";
import axios from "axios";

const BuyProduct = () => {
    const { total } = useContext(AmountContext);
    const router = useRouter();

    async function makePayment({ productId = null }) {
        const key = process.env.NEXT_PUBLIC_RAZORPAY_API_KEY;

        try {
            // Make API call to the serverless API
            const { data } = await axios.get("/api/razorpay");
            console.log("API Response:", data); // Log the API response

            const { order } = data; // Destructure the order directly from data
            console.log("Order object:", order); // Log the order object

            if (!order || !order.currency || !order.amount || !order.id) {
                throw new Error("Invalid order data");
            }

            const options = {
                key: key,
                name: "mmantratech",
                currency: order.currency,
                amount: order.amount,
                order_id: order.id,
                description: "Understanding RazorPay Integration",
                handler: async function (response) {
                    const verifyResponse = await fetch("/api/paymentverify", {
                        method: "POST",
                        body: JSON.stringify({
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                        }),
                    });

                    const res = await verifyResponse.json();

                    if (res.message === "success") {
                        router.push("/paymentsuccess?paymentid=" + response.razorpay_payment_id);
                    } else {
                        alert("Payment verification failed. Please try again.");
                    }
                },
                prefill: {
                    name: "mmantratech",
                    email: "mmantratech@gmail.com",
                    contact: "9354536067",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

            paymentObject.on("payment.failed", function (response) {
                alert("Payment failed. Please try again.");
            });
        } catch (error) {
            console.error("Error in makePayment:", error);
            alert("There was an issue initiating the payment. Please try again.");
        }
    }

    return (
        <Suspense fallback={<Loading />}>
            <Buy makePayment={makePayment} />
        </Suspense>
    );
};

export default BuyProduct;
