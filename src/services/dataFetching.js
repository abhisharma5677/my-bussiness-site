import { httpAxios } from "@/config/httpHelper";
// import { useParams } from "react-router-dom";


export async function getPhotosFromDatabase(){
    const result2 = await httpAxios.get('/api/photo').then((response)=>response.data);
    return result2;
}



