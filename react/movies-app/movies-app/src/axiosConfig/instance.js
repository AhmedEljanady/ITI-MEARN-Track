import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/",
  params: {
    api_key: "45e5cf07f2fc294373c851a8bb85b9a1",
  },
});
export default axiosInstance;
