import Axios from "axios";

export const SNCFInstance = Axios.create({
    baseURL: import.meta.env.VITE_SNCF_ENDPOINT as string
});
