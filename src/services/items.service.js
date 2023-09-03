import axios from 'axios';


let apiUrl = "https://pink-blink-server.vercel.app/main/";
let adminUrl = "https://pink-blink-server.vercel.app/admin/";
export const getskincare = async () => {
    try {
        let response = await axios.get(apiUrl + "skincare");

        return response.data;
    } catch (err) {
        console.error(err);
        throw err; // Rethrow the error for better error handling in the calling code.
    }
};
export const getwomanwear = async () => {
    try {
        let response = await axios.get(apiUrl + "womanwear");

        return response.data;
    } catch (err) {
        console.error(err);
        throw err; // Rethrow the error for better error handling in the calling code.
    }
};
export const getmakeup = async () => {
    try {
        let response = await axios.get(apiUrl + "makeup");

        return response.data;
    } catch (err) {
        console.error(err);
        throw err; // Rethrow the error for better error handling in the calling code.
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
};
export const addWomanWear = async (formData) => {
    try {
        let response = await axios.post(adminUrl + "createproduct/womanwear", formData, {
            headers: {
                "token": localStorage.getItem("token"),
            },
        });

        return response.data;
    } catch (err) {
        console.error(err);
        throw err; // Rethrow the error for better error handling in the calling code.
    }
};

export const addMakeup = async (formData) => {
    try {
        let response = await axios.post(adminUrl + "createproduct/makeup", formData, {
            headers: {
                "token": localStorage.getItem("token"),
            },
        });

        return response.data;
    } catch (err) {
        console.error(err);
        throw err; // Rethrow the error for better error handling in the calling code.
    }
};
