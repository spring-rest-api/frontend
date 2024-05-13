import axios from 'axios'

export const baseURL = import.meta.env.VITE_API_URL as string

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const imageApi = axios.create({
  baseURL: '',
})
