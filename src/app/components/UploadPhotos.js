'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import { addNewPhoto } from '@/services/dataFetching';



const UploadPhotos = () => {

    const [userPhoto, setUserPhoto] = useState({
        message: '',
        myFile: '',
    })


    const postPhotoFunction = () => {

        try {

            const result = addNewPhoto(userPhoto)
            console.log(result)
            setUserPhoto({
                message: '',
                myFile: '',
            })

        } catch (error) {

            console.log(error);

        }

    }



    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const base64 = await toBase64(file);
        setUserPhoto({
            ...userPhoto,
            myFile: base64,
        })
    }



    // Convert a file to base64 string
    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };



    return (
        <div className='upload_parent_div'>
            <form onSubmit={postPhotoFunction}>

                <div className='upload_parent'>
                    <label htmlFor='file-upload'>
                        <Image src={userPhoto.myFile || '/upload.jpg'} alt='profile' width={140} height={140} className='photo_upload_label'></Image>
                    </label>
                </div>

                <input type='file' label='Image'
                    onChange={handleFileUpload}
                    name='myFile' accept='.jpeg, .png, .jpg' id='file-upload'
                    className='photo_upload_input'
                /><br />

                <div className='text_area_class'>
                    <textarea id="message" name="message" rows="3"
                        onChange={(event) => {
                            setUserPhoto({
                                ...userPhoto,
                                message: event.target.value,
                            })
                        }} value={userPhoto.message} placeholder='Write Updates...'
                        className='textArea'>
                    </textarea><br />
                </div>

                <div className='post_btn_parent'>
                    <input type="submit" value="Update"
                        className='post_btn'
                    />
                </div>

            </form>

        </div>
    )
}

export default UploadPhotos