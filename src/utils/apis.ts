import { LoginAdminDto } from '../types/admin';
import API from './axiosInstance';

export const loginAdmin = (data: LoginAdminDto) =>
  API.post('auth/admin/login', data);


export const users = () => {
  const token = localStorage.getItem('token');

  return API.get('admin/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

