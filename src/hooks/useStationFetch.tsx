import { Error } from "src/types/common";
import {
  StationData,
  UseStationFetch,
  UseStationFetchResponse,
} from "src/types/result";
import { fetcher } from "src/utils/fetcher";
import useSWR, { SWRResponse } from "swr";

export const useStationFetch: UseStationFetch = (
  url: string
): UseStationFetchResponse => {
  const { data, error }: SWRResponse<StationData, Error> = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
