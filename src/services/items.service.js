import axios from 'axios';


let apiUrl = "https://pink-blink-server.vercel.app/main/";
let adminUrl = "https://pink-blink-server.vercel.app/main/admin/";
export const getItem = async(collection) => {
    
    try {
        let response;

        if (collection === "womanwear") {
            response = await axios.get(apiUrl + "womanwear");
        } else if (collection === "makeup") {
            response = await axios.get(apiUrl + "makeup");
        } else if (collection === "skincare") {
            response = await axios.get(apiUrl + "skincare");
        } else {
            throw new Error("Invalid collection");
        }

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


export const addItem = async (formData, collection) => {
    try {
        let response;

        if (collection === "womanwear") {
            response = await axios.post(adminUrl + "womanwear" , formData, {
                headers: {
                    "token": localStorage.getItem("token")
                }
            });
        } else if (collection === "makeup") {
            response = await axios.post(adminUrl + "makeup", formData, {
                headers: {
                    "token": localStorage.getItem("token")
                }
            });
        } else if (collection === "skincare") {
            response = await axios.post(adminUrl + "skincare", formData, {
                headers: {
                    "token": localStorage.getItem("token")
                }
            });
        } else {
            throw new Error("Invalid collection");
        }

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

    