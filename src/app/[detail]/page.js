"use client"

import React from 'react';
import Image from 'next/image';
import sweets from '../components/01sweetObject';
import style from "@/app/styles/sweets.module.css";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify'




const Page = ({ params }) => {
    
    const router = useRouter();


    const detail = parseInt(params.detail, 10);

    if (isNaN(detail) || detail < 1 || detail > sweets.length) {
        return <div>Invalid sweet detail</div>;
    }

    const sweet = sweets[detail - 1];

    console.log(detail)


    const handleAddToCart = async () => {
        const token = localStorage.getItem('token');

        if (!token) {

            //toast message for successfully login...
            toast.success("Not Logged In !!", {
                position: "top-center"
            })



            // Navigate to the login page if the user is not logged in
            router.push('/LoginPage');
            return;
        }



        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            };

            const response = await axios.post('/api/Cart/addItem', { id: sweet.id, product: sweet.name, quantity: 1 }, config);

            // console.log(response);

            if (response.data.Success) {
                
                //toast message for successfully login...
                toast.success("User Login Succesfull...", {
                    position: "top-center"
                })


                // Navigating to the Cart page
                router.push("/cart")
            }

            if (response.data.Success === false) {
                toast.error(`Error message:${response.data.message}`, {
                    position: "top-center"
                })
            }
        }
        catch (error) {
            // Optionally, handle errors
            // console.error('Error adding item to cart:', error);
            alert('An error occurred. Please try again.');
        }
    };



    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className={style.sweet_container_dyanamic_page}>
                    <div className={style.image_slider_dyanamic_page}>
                        <Image src={sweet.Img1} alt="Image 1" loading="lazy" width={200} height={200} className={style.img_common_class_dyanamic_page} />
                        <Image src={sweet.Img2} alt="Image 2" loading="lazy" width={200} height={200} className={style.img_common_class_dyanamic_page} />
                        <Image src={sweet.Img3} alt="Image 3" loading="lazy" width={200} height={200} className={style.img_common_class_dyanamic_page} />
                        <Image src={sweet.Img4} alt="Image 4" loading="lazy" width={200} height={200} className={style.img_common_class_dyanamic_page} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className={style.sweet_detail_dyanamic_page}>
                            <h1>{sweet.name}</h1>
                            <p>{sweet.meaning}</p>
                            <button onClick={handleAddToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
