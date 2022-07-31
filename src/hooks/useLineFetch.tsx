import { fetcher } from "src/utils/fetcher";
import useSWR, { SWRResponse } from "swr";

type Response = {
  response: {
    line: string;
  };
};

export const useLineFetch = (url: string) => {
  const { data, error }: SWRResponse<Response, any> = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
