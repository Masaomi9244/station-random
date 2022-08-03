import { Error } from "./common";

export type LineData = {
  response: {
    line: string;
  };
};

export type UseLineFetch = {
  (url: string): {
    data: LineData | undefined;
    error: Error | undefined;
    isLoading: boolean;
  };
};

export type UseLineFetchResponse = {
  data: LineData | undefined;
  error: Error | undefined;
  isLoading: boolean;
};

export type UseLineResult = {
  (Props: Prefecture): string;
};

export type Station = [
  {
    name: string;
    prefecture: string;
    line: string;
    x: number;
    y: number;
    postal: string;
    prev: string | null;
    next: string | null;
  }
];

export type StationData = {
  response: {
    station: Station;
  };
};

export type UseStationFetch = {
  (url: string): {
    data: StationData | undefined;
    error: Error | undefined;
    isLoading: boolean;
  };
};

export type UseStationFetchResponse = {
  data: StationData | undefined;
  error: Error | undefined;
  isLoading: boolean;
};

export type Prefecture = string | string[] | undefined;

export type Props = {
  line: string;
  prefecture: Prefecture;
};
