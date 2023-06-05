import axios, { AxiosResponse } from 'axios';
import { Posts } from '../../types/posts.index';

const postApi = axios.create({
  baseURL: 'http://localhost:3000/posts',
});

export const getPosts = (): Promise<AxiosResponse<Posts[]>> => {
  return postApi.get('/');
};

export const getPost = (): Promise<AxiosResponse<Posts>> => {
  return postApi.get('/1');
};
