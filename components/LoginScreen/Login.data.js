import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://young-falls-56718.herokuapp.com/api/v1'
});

export const login = (email, password) => instance.post('/login', { email, password });
