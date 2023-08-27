import axios from 'axios';


let apiUrl = "https://pink-blink-server.vercel.app/main/";
let adminUrl = "https://pink-blink-server.vercel.app/main/admin/";
export const getItems = async()=>{

    try{
        let response = await axios.get(apiUrl+"items");
        return response.data;
    }
    catch(err){
        console.error(err);
    }
};


export const addItem = async(formData)=>{
    try {
        let response =await axios.post(adminUrl+ "createproduct", formData, {
            headers:{
                "token" : localStorage.getItem("token")
            }
        });

        return response.data;
    }
    catch(err){
        console.error(err);
    }
};