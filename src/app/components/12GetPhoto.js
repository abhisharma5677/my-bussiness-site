'use client';

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { getPhotosFromDatabase, deletePhoto } from '@/services/dataFetching';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoginContext from '../context/LoginContext';
import style from '@/app/styles/getPhoto.module.css';
import Loading from '../loading';

const GetPhoto = () => {
  const { login } = useContext(LoginContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Separate loading state

  // Fetch data from database on component mount
  async function getDataOnRender() {
    setLoading(true); // Set loading to true before fetching data
    try {
      const data1 = await getPhotosFromDatabase();
      if (data1) {
        data1.reverse(); // Reverse the array to show the latest data first
      }
      setData(data1); // Set fetched data to state
    } catch (error) {
      console.error('Error fetching photos:', error);
      toast.error('Failed to fetch photos. Please try again later.');
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  }

  useEffect(() => {
    getDataOnRender();
  }, []);

  // Handle the deletion of a photo
  async function handleDelete(photoId) {
    try {
      const deleteResult = await axios.delete(`/api/photo/${photoId}`);
      if (deleteResult.data.success) {
        toast.success('Post deleted successfully...', {
          position: 'top-center',
        });
        getDataOnRender(); // Refresh data after successful deletion
      }
    } catch (error) {
      console.error('Error deleting photo:', error);
      toast.error('Failed to delete the post. Please try again later.');
    }
  }

  // Format the date as "22 July 2024"
  function formatDate(date) {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  }

  // Show loading indicator while data is being fetched
  if (loading) {
    return <Loading />;
  }

  // Show message if no data is available
  if (!data || data.length === 0) {
    return <div>No photos available.</div>;
  }

  return (
    <div>
      {data.map((element) => (
        <div key={element._id} className={style.upload_center_flex}>
          <div className={style.photo_and_message}>
            <div className={style.date_and_delete}>
              {/* {login && ( // Conditionally render delete button if user is logged in */}
                {/* <AiFillDelete
                  className={style.delete_icon}
                  onClick={() => handleDelete(element._id)}
                /> */}
              {/* )} */}
            </div>
            {element.myFile && (
              <Image
                src={element.myFile}
                alt="decoder"
                width={200}
                height={200}
                className={style.uploaded_image_css}
              />
            )}
            {element.message && (
              <p className={style.uploaded_msg_css}>{element.message}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetPhoto;
