import axios from 'axios';
import { env } from '../env';
import Cookies from 'js-cookie';

const token = Cookies.get('token') || undefined;

export const api = axios.create({
    baseURL: env.API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
}
