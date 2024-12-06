import axios from "axios"
const axiosInstance=axios.create({
    // baseURL :"http://127.0.0.1:5001/clone-ela/us-central1/api"
    baseURL :"https://amazon-api2024-eliyas-daba.onrender.com/"
});
export{axiosInstance}