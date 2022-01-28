import { useContext } from 'react';
import { UserContext } from '../utils';

export const useUser = () => useContext(UserContext);
