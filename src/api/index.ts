import axios from 'axios';

const fakeApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = async () => {
  try {
    const res = await fakeApi.get('/users');
    return await Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getAlbums = async () => {
  try {
    const res = await fakeApi.get('/albums');
    return await Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
