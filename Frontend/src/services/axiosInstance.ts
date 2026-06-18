import axios from "axios";
import { env } from '../config/env'

const http = axios.create({
    baseURL: env.API_BASE_URL,
    withCredentials: true,   //sends cookies automatically
    timeout: 10000,
    headers:{
        'Content-type': 'application/json',
    }
    
}) 

export default http