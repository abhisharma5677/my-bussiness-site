'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { getPhotosFromDatabase } from '@/services/dataFetching';
// import DatabasePhoto from './DatabasePhoto';

const GetPhoto = () => {

    const [data, setData] = useState([]);

    async function getDataOnRender() {
        const data1 = await getPhotosFromDatabase();
        console.log(data1);
        setData(data1);
    }

    useEffect(() => {
        getDataOnRender();
    }, [])



    return (
        <div>
            {data.map((element) => {
                return (
                    <div key={element._id} className='photo_and_message'>
                        {element.myFile && (<Image src={`${element.myFile}`} alt="decoder" width={200} height={200} className='uploaded_image_css' />)}
                        {element.message && (<p className='uploaded_msg_css'>{element.message}</p>)}
                    </div>
                )
            })}
        </div>
    )
}

export default GetPhoto
