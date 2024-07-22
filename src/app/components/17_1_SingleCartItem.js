import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import style from "@/app/styles/CartItems.module.css";
import { toast } from 'react-toastify'



const SingleCartItem = ({ name, price, quantity, image, rating, cartArray, pid, cartItemId }) => {
    
    const router = useRouter();

    const handleRemoveClick = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/login');
                return;
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

            const response = await axios.post('/api/Cart/removeItem', { cartItemId }, config);

            if (response.data.success) {

                //toast message for successfully login...
                toast.success("Removed Succefully ", {
                    position: "top-center"
                })


                // Navigate to the cart page or update the cart state
                router.push('/cart');

            } 
            else {
                // console.error(response.data.message);
                toast.error(`Error message:${response.data.message}`, {
                    position: "top-center"
                })
            }
        } 
        catch (error) {
            // console.error('Error removing item from cart:', error);
            // console.error(response.data.message);
            toast.error(`Error removing item from cart:${error}`, {
                position: "top-center"
            })
        }
    };

    return (
        <div className={style.singleCart_container}>
            <div className={style.cart_item_wrapper}>
                <div className={style.cart_item_content}>
                    <div className={style.image_container}>
                        <div className={style.cartImage}>
                            <Image src={image} alt='img' width={100} height={100} className={style.cartImage} />
                        </div>
                        <div className={style.quantity_controls}>
                            <button type='button' className={style.quantity_button}>-</button>
                            <span className={style.quantity}>{quantity}</span>
                            <button type='button' className={style.quantity_button}>+</button>
                        </div>
                    </div>
                    <div className={style.item_details}>
                        <div className={style.item_name}>{name}</div>
                        <div className={style.item_rating}>{rating}</div>
                        <div className={style.item_price}>From Rs {price}</div>
                        <button type='button' onClick={handleRemoveClick} className={style.remove_button}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SingleCartItem;

