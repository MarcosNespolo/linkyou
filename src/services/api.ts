import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-dtmnko4sv-gabrielsestrem.vercel.app/api/pricing/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  },
})