import {axiosInstance} from "../AxiosConfig";

export async  function getSalesData() {
    try{
        const response =  await axiosInstance.get('/reports');
        return response.data;
    }catch(error) {
        return [];
    }
    
}