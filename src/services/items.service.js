import axios from "axios";


let apiUrl = "";
let adminUrl = "";
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
        let response =await axios.item(adminUrl+ "createpost", formData, {
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