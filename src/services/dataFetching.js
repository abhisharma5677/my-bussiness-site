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


export async function loginFunction(loginData){
    const result3 = await httpAxios.post('/api/OwnerLogin' , loginData);
    return result3;
}


export async function signUpFunction(signUpData){
    const result4 = await httpAxios.post('/api/OwnerSignUp' , signUpData);
    return result4;
}