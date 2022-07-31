import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const useStationFetch = (url: string) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
