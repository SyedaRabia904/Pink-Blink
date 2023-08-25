import axios from "axios";


const apiUrl = "";

export const login = async(formData)=>{
    try{
        let response = await axios.item(apiUrl + "login",formData);
        return response.data;
    }
    catch(err){
        console.error(err);
    }
};


export const register= async(formData)=>{

    try {
        let response= await axios.item(apiUrl +"register", formData)
        return response.data;
    }
    catch(err) {
        console.error(err);
    }
};