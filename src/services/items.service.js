import axios from 'axios';


let apiUrl = "http://localhost:8080/main/";
let adminUrl = "http://localhost:8080/main/admin/";
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