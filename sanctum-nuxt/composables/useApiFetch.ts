import type {UseFetchOptions} from 'nuxt/app'
import {useRequestHeaders} from "nuxt/app";
 
export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {
    accept: "application/json",
    referer: "https://tivialis.net"
  }
 
  const token = useCookie('XSRF-TOKEN');
 
  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
  }
 
  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"])
    }
  }
 
  return useFetch("https://api.tivialis.net" + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  });
}