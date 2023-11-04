'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
import { addNewPhoto } from '@/services/dataFetching';
import { toast } from 'react-toastify'
import { useRouter } from "next/navigation";


const UploadPhotos = () => {

    const router = useRouter();

    const [userPhoto, setUserPhoto] = useState({
        message: '',
        myFile: '',
    })


    async function postPhotoFunction(e){

        e.preventDefault();

        try {

            const result = await addNewPhoto(userPhoto)
            console.log(result);

            if (result.data.success) {
                //toast message for successfully uploading post...
                toast.success("Post Uploaded Succesfully...", {
                    position: "top-center"
                })


                //If succesfully uploaded then move to the next page
                router.push('/Updates');
            }


        } catch (error) {

            console.log(error);
            toast.error("Error in Post Uploading !!", {
                position: "top-center"
            })

        }

        setUserPhoto({
            message: '',
            myFile: '',
        })

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
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className='upload_parent_div'>
                <form onSubmit={postPhotoFunction}>

                    <div className='upload_parent'>
                        <label htmlFor='file-upload'>
                            <Image src={userPhoto.myFile || '/uploads2.png'} alt='profile' width={140} height={140} className='photo_upload_label'></Image>
                        </label>
                    </div>

                    <input type='file' label='Image'
                        onChange={handleFileUpload}
                        name='myFile' accept='.jpeg, .png, .jpg' id='file-upload'
                        className='photo_upload_input'
                        required
                    /><br />

                    <div className='text_area_class'>
                        <textarea id="message" name="message" rows="3"
                            onChange={(event) => {
                                setUserPhoto({
                                    ...userPhoto,
                                    message: event.target.value,
                                })
                            }}
                            value={userPhoto.message}
                            placeholder='Write Updates...'
                            required
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
        </div>
    )
}

export default UploadPhotos