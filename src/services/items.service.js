import axios from 'axios';


let apiUrl = "https://pink-blink-server.vercel.app/main/";
<<<<<<< HEAD
let adminUrl = "https://pink-blink-server.vercel.app/admin/";
=======
let adminUrl = "https://pink-blink-server.vercel.app/admin/createproduct/";
>>>>>>> 21a33ea9d9d7d8ba9c5582de73f9346679f73430
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


export const addSkinCare = async (formData) => {
    try {
        let response = await axios.post(adminUrl + "createproduct/skincare", formData, {
            headers: {
                "token": localStorage.getItem("token"),
            },
        });

        return response.data;
    } catch (err) {
        console.error(err);
        throw err; // Rethrow the error for better error handling in the calling code.
    }
<<<<<<< HEAD
};
=======
};

    
>>>>>>> 21a33ea9d9d7d8ba9c5582de73f9346679f73430
