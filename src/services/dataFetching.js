import { httpAxios } from "@/helper/httpHelper";
// import { useParams } from "react-router-dom";


export async function addNewPhoto(photoData){
    const result = await httpAxios.post('/api/photo',photoData);
    console.log("Done....")
    return result;
}


export async function getPhotosFromDatabase(){
    const result2 = await httpAxios.get('/api/photo').then((response)=>response.data);
    return result2;
}


// export async function deletePhoto(photoId , params){
//     const result3 = await httpAxios.delete(`/api/photo`);
//     return result3;
// }