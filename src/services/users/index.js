import { fetchWrapper } from '@/utils/fetcher';
import qs from 'qs'

const baseUrl = "https://jsonplaceholder.typicode.com/";

export const userServices = {
    fetchUser,
}

function fetchUser() {
  return fetchWrapper.get(`${baseUrl}/users`)
}
