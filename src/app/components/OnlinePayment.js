'use client';

import { httpAxios } from '@/helper/httpHelper';
import React, { useState } from 'react'


const OnlinePayment = () => {


  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };


  const makePayment = async () => {
    console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await httpAxios.post("api/razorpay")
    // const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
    //   t.json()
    // );

    console.log(data);

    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };


  // const [inputValue, setInputValue] = useState('');

  // const paymentStart = (e) => {
  //   e.preventDefault();

  //   const amount = inputValue;
  //   console.log(amount);

  //   if (amount == '' || amount == null) {
  //     alert("Amount is required to proceed !!");
  //     return;
  //   }

  //   try {

  //     const result = startPayment(inputValue)
  //     console.log(result)
  //     setInputValue('');

  //   } catch (error) {

  //     console.log(error);

  //   }

  //   // console.log("payment started........");

  // }


  return (
    <div>
      <form>
        {/* <input type='number' onChange={(e) => setInputValue(e.target.value)} value={inputValue} className='payment_input' placeholder='Enter amount'></input> */}
        <button className='checkout_btn' onClick={makePayment}>Checkout</button>
      </form>
      {/* <h1>{inputValue}</h1> */}
    </div>
  )
}

export default OnlinePayment