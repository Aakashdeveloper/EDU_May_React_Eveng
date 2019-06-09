import axios from 'axios';
import {API} from '../config';

export function getPropertyData(){
    const config = {
        url:`${API.API_LINK}?limit=20&lastId=0`,
        method:'GET',
        headers:{
            'Authorization': 'Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz',
            'Content-Type': 'application/json'
        }
    }

    let request = axios.request(config)
        .then((response) => {
            return response.data
        })

    return request
}


export function getPropertyDetail(id){
    const config = {
        url:`${API.API_LINK}/${id}`,
        method:'GET',
        headers:{
            'Authorization': 'Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz',
            'Content-Type': 'application/json'
        }
    }

    let request = axios.request(config)
        .then((response) => {
            return response.data
        })

    return request
}