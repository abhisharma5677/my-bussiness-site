'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { getPhotosFromDatabase, deletePhoto } from '@/services/dataFetching';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
// import DatabasePhoto from './DatabasePhoto';

const GetPhoto = () => {

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
        await axios.delete(`/api/photo/${photoId}`);
        getDataOnRender();
        console.log("Photo deleted succesfully...");
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
                    <div key={element._id} className='photo_and_message'>
                        <div className='date_and_delete'>
                            <div className='date_css'>
                                <div>Posted On</div>
                                {element.createdAt}
                            </div>
                            <AiFillDelete className='delete-icon' onClick={() => {
                                handleDelete(element._id)
                            }} />
                        </div>
                        {element.myFile && (<Image src={`${element.myFile}`} alt="decoder" width={200} height={200} className='uploaded_image_css' />)}
                        {element.message && (<p className='uploaded_msg_css'>{element.message}</p>)}
                    </div>
                )
            })}
        </div>
    )
}

export default GetPhoto
