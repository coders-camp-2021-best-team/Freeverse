import { useAuthUser } from '@react-query-firebase/auth';
import { auth } from '../api';

export const useUser = () => useAuthUser('user', auth);
