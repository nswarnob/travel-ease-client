import axios from 'axios';
import { useContext, useMemo } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAxios = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = useMemo(() => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    instance.interceptors.request.use((config) => {
      if (user?.accessToken) {
        config.headers.authorization = `Bearer ${user.accessToken}`;
      }
      return config;
    });

    return instance;
  }, [user?.accessToken]);

  return axiosSecure;
};

export default useAxios;
