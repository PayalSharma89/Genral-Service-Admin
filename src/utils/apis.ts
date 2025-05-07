import { LoginAdminDto } from '../types/admin';
import API from './axiosInstance';

export const loginAdmin = (data: LoginAdminDto) =>
  API.post('/admin/login', data);
