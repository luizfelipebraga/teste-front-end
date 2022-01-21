import axios from "axios";
import { API } from "../env";

export const api = axios.create({
  baseURL: API.ADDRESS,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization", 
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    "Content-Type": "application/json;charset=UTF-8"
  },
});
