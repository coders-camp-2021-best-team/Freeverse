import { useContext } from 'react';
import { AuthContext } from '../utils';

export const useAuth = () => useContext(AuthContext);
