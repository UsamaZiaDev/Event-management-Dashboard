import axios from "axios" 
import config from	"../../config/config";

export class  EventServices{
    
    baseUrl = config.baseURL


    getEvents(){
        return axios.get(`${this.baseUrl}/events`)
    }

    getEvent(id){
        return axios.get(`${this.baseUrl}/view/${id}`)
    }

    addEvent(data){
        return axios.post(`${this.baseUrl}/add-event`,  data)
    }

    deleteEvent(id){
        console.log("Services_Delete_Evet_Frontend__", id);
        return axios.delete(`${this.baseUrl}/delete-event/${id}`)
    }

    updateEvent(data){
        return axios.put(`${this.baseUrl}/update-event/${data.id}`, data)
    }

}

const eventServices = new EventServices();
export default eventServices;