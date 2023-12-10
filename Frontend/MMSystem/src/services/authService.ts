import { apiClient } from '../utils/api';

interface LoginCreds {
  username: string;
  password: string;  
}

export async function login(creds: LoginCreds) {
  const {data} = await apiClient.post('/login', creds);
  return data; 
}

export async function register(creds: LoginCreds) {
  const {data} = await apiClient.post('/register', creds); 
  return data;
}

export async function logout() {
  return apiClient.post('/logout');
}