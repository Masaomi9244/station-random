import { useStationFetch } from "src/hooks/useStationFetch";
import { Props } from "src/pages/result";
import { API_URL } from "src/utils/const";

export const useStationResult = (Props: Props) => {
  const stationUrl =
    API_URL +
    "getStations&line=" +
    Props.line +
    "&prefecture=" +
    Props.prefecture;

  const { data, error, isLoading } = useStationFetch(stationUrl);
  if (error) {
    return "エラーが発生しました。";
  }

  if (isLoading || !data?.response.station) {
    return "ロード中です。";
  }

  const randomNumber: number = Math.floor(
    Math.random() * data.response.station.length
  );
  const station = data.response.station[randomNumber].name;

  return station;
};
