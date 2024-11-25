// import axios from "axios"

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//     return axiosInstance({
//         method:`${method}`,
//         url:`${url}`,
//         data: bodyData ? bodyData : null,
//         headers: headers ? headers: null,
//         params: params ? params : null,
//     });
// }




import axios from "axios";

// Set the base URL for API requests
// const baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:4000"; // Fallback to localhost for local development
const baseURL = process.env.REACT_APP_BASE_URL; // Fallback to localhost for local development

export const axiosInstance = axios.create({
    baseURL, // Use the base URL here
});

// API connector function
export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method: method,
        url: url,
        data: bodyData || null,
        headers: headers || null,
        params: params || null,
    });
};
