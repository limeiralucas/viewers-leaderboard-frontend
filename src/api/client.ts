import axios from "axios";
import { convertKeysToCamelCase } from "@/utils";
import { API_BASE_URL } from "@/config";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.response.use((response) => {
  response.data = convertKeysToCamelCase(response.data);
  return response;
});

export { apiClient };