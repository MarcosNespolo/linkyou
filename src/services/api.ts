import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-gabrielsestrem.vercel.app/api/pricing/',
  headers: {
    'Content-Type': 'application/json',
  },
})