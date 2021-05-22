import { useFetch } from "./useFetch";

export default function useUser() {
  const { data, mutate, error } = useFetch('auth/me');

  const loading = !data && !error;
  const loggedIn = !error && data;

  return {
    loading,
    loggedIn,
    user: data,
    mutate,
  };
}