import axios, {AxiosError} from "axios";
import toast from "react-hot-toast";

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  withCredentials: false,
});

const token = localStorage.getItem('token');

if (token) {
  AxiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
}

const handleBadRequest = (error:AxiosError) => {
  console.log(error);
  toast.error('Bad request')
};

const handleServerError = (error:AxiosError) => {
  console.log(error);
  toast.error('Request error')
};

AxiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    const status = error.response?.status;

    if (status === 400) {
      return handleBadRequest(error);
    } else if (status && status > 400) {
      return handleServerError(error);
    }

    return Promise.reject(error);
  }
);

export default AxiosInstance;
