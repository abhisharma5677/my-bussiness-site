'use client'

import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { getPhotosFromDatabase, deletePhoto } from '@/services/dataFetching';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify'
import LoginContext from '../context/LoginContext';
import style from "@/app/styles/getPhoto.module.css"


const GetPhoto = () => {

    const { login } = useContext(LoginContext);

    const [data, setData] = useState([]);

    async function getDataOnRender() {
        const data1 = await getPhotosFromDatabase();
        // console.log(data1);

        if(data1){
            data1.reverse();
        }
        setData(data1);
    }

    useEffect(() => {
        getDataOnRender();
    }, [])

    async function handleDelete(photoId) {
        const deleteResult = await axios.delete(`/api/photo/${photoId}`);

        // If deletion is succesfull then do the below thing...
        if (deleteResult.data.success) {

            //Toast message on deletion...
            toast.success("Post deleted successfully...", {
                position: 'top-center'
            })

            //Refresh the page after deletion...
            getDataOnRender();

            // console.log("Photo deleted succesfully...");
        }
    }



    // Function to format the date as "22 July 2024"
    function formatDate(date) {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    }



    return (
        <div>
            {data.map((element) => {

                // // const parsedDate = new Date(element.createdAt);
                // const str = element.createdAt;
                // const newString = str.slice(0, -5)
                // console.log(typeof newString);
                // console.log(newString);

                return (
                    <div key={element._id} className={style.upload_center_flex}>
                        <div className={style.photo_and_message}>
                            <div className={style.date_and_delete}>
                                {/* <div className={style.date_css}>
                                    <div>Posted On {formatDate(element.createdAt)}</div>
                                </div> */}
                                {/* Show delete button if the user is registered... */}
                                <AiFillDelete className={style.delete_icon} onClick={() => {
                                    handleDelete(element._id)
                                }} />
                            </div>
                            {element.myFile && (<Image src={`${element.myFile}`} alt="decoder" width={200} height={200} className={style.uploaded_image_css} />)}
                            {element.message && (<p className={style.uploaded_msg_css}>{element.message}</p>)}
                        </div>
                    </div>
                )
            })}
        </div>
    )

}


export default GetPhoto
