import axios, { 
    AxiosInstance, 
    AxiosRequestConfig 
} from 'axios'
import * as dotenv from 'dotenv' 
dotenv.config()

const API_URL = process.env.API_URL || 'https://rickandmortyapi.com/api/'

class Api {
    private api: AxiosInstance | null = null

    constructor(){
        this.api = axios.create({ baseURL: API_URL })
    }

    request<T>(args: AxiosRequestConfig) {
        if (!this.api) throw new Error('API is not defined')
        return this.api.request<T>(args)
    }

    get<T>(url: string, args: Omit<AxiosRequestConfig, 'method'> = {}) {
        return this.request<T>({ url, method: 'GET', ...args })
    }

    post<T>(url: string, args: Omit<AxiosRequestConfig, 'method'> = {}) {
        return this.request<T>({ url, method: 'POST', ...args })
      }
}

export default new Api