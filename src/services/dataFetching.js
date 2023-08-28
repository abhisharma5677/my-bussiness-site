import { httpAxios } from "@/helper/httpHelper";

export async function addNewPhoto(photoData){
    const result = await httpAxios.post('/api/photo',photoData);
    console.log("Done....")
    return result;
}


export async function getPhotosFromDatabase(){
    const result2 = await httpAxios.get('/api/photo').then((response)=>response.data);
    return result2;
}