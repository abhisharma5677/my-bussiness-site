'use client'

import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { getPhotosFromDatabase, deletePhoto } from '@/services/dataFetching';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify'
import LoginContext from '../context/LoginContext';
// import DatabasePhoto from './DatabasePhoto';

const GetPhoto = () => {

    const { login } = useContext(LoginContext);

    const [data, setData] = useState([]);

    async function getDataOnRender() {
        const data1 = await getPhotosFromDatabase();
        console.log(data1);
        data1.reverse();
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

    return (
        <div>
            {data.map((element) => {

                // // const parsedDate = new Date(element.createdAt);
                // const str = element.createdAt;
                // const newString = str.slice(0, -5)
                // console.log(typeof newString);
                // console.log(newString);

                return (
                    <div key={element._id} className='upload_center_flex'>
                        <div className='photo_and_message'>
                            <div className='date_and_delete'>
                                <div className='date_css'>
                                    <div>Posted On</div>
                                    {element.createdAt}
                                </div>
                                {/* Show delete button if the user is registered... */}
                                {login && <AiFillDelete className='delete-icon' onClick={() => {
                                    handleDelete(element._id)
                                }} />}
                            </div>
                            {element.myFile && (<Image src={`${element.myFile}`} alt="decoder" width={200} height={200} className='uploaded_image_css' />)}
                            {element.message && (<p className='uploaded_msg_css'>{element.message}</p>)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GetPhoto
