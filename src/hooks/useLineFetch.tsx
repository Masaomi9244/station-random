import { Error } from "src/types/common";
import { LineData, UseLineFetch, UseLineFetchResponse } from "src/types/result";
import { fetcher } from "src/utils/fetcher";
import useSWR, { SWRResponse } from "swr";

export const useLineFetch: UseLineFetch = (
  url: string
): UseLineFetchResponse => {
  const { data, error }: SWRResponse<LineData, Error> = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
