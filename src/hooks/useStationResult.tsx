import { Props, UseStationFetchResponse } from "src/types/result";
import { API_URL } from "src/utils/const";
import { useStationFetch } from "./useStationFetch";

export const useStationResult = (Props: Props): string => {
  const url: string =
    API_URL +
    "getStations&line=" +
    Props.line +
    "&prefecture=" +
    Props.prefecture;

  const { data, error, isLoading }: UseStationFetchResponse =
    useStationFetch(url);

  if (error) {
    return "エラーが発生しました。";
  }

  if (isLoading || !data || !data.response.station) {
    return "ロード中です。";
  }

  const randomNumber: number = Math.floor(
    Math.random() * data.response.station.length
  );

  return data.response.station[randomNumber].name;
};
