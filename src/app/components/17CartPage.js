// src/app/components/CartItems.js

'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from "@/app/styles/CartItems.module.css";
import SingleCartItem from './17_1_SingleCartItem';
import sweets from './01sweetObject';
import Loading from '../loading';

const CartItems = () => {
    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true); // Add loading state
    const [sum, setSum] = useState(0);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    setError('User not logged in');
                    setLoading(false); // Set loading to false
                    return;
                }

                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };

                const response = await axios.get('/api/Cart/getItem', config);

                if (response.data.cartItems) {
                    setCartItems(response.data.cartItems);
                } else {
                    setError(response.data.message);
                }
            } catch (error) {
                setError('An error occurred. Please try again.');
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchCartItems();
    }, []);

    useEffect(() => {
        const sumValue = cartItems.reduce((accumulator, item) => {
            return accumulator + 300 * item.quantity;
        }, 0);

        const roundedNum = sumValue.toFixed(2);

        setSum(roundedNum);
    }, [cartItems]);


    return (
        <div>
            {loading ? ( // Check if loading is true
                <Loading />
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : cartItems.length > 0 ? (
                <div className={style.container}>
                    <div className={style.content}>
                        <div className={style.cart_width_container}>
                            {cartItems.map((item, index) => (
                                <div key={index}>
                                    <SingleCartItem 
                                        name={sweets[item.id - 1].name} 
                                        price={300} 
                                        quantity={item.quantity} 
                                        image={sweets[item.id - 1].Img1} 
                                        cartArray={cartItems} 
                                        pid={item.id} 
                                        cartItemId={item._id} 
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={style.checkout_section}>
                            <div className={style.checkout_container}>
                                <div className={style.checkout_content}>
                                    <div className={style.total}>Total: Rs {sum}</div>
                                    <button className={style.checkout_button}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p style={{fontSize:"30px",fontWeight:"bolder",textAlign:"center",marginTop:"20%",marginBottom:"20%",color:"grey", fontFamily:"sans-serif"}}>Your cart is empty</p>
            )}
        </div>
    );
};

export default CartItems;
