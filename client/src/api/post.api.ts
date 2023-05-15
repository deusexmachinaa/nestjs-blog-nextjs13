import axios, { AxiosResponse } from 'axios';
import { Posts } from '../../types/posts.index';

const postApi = axios.create({
  baseURL: 'http://localhost:3000/posts',
});

export const getAllPosts = (): Promise<AxiosResponse<Posts[]>> => {
  return postApi.get('/');
};
