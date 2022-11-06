import httpClient from '../../helpers/httpClient';
import User from '../../types/models/User';

export const userGetUsers = () => () => httpClient.get<User[]>('/users');
