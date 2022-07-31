import { API_URL } from "src/utils/const";
import { useLineFetch } from "./useLineFetch";

export const useLineResult = (Props: string | string[] | undefined) => {
  const lineUrl = API_URL + "getLines&prefecture=" + Props;

  const { data, error, isLoading } = useLineFetch(lineUrl);
  if (error) {
    return "検索中にエラーが発生しました。";
  }

  if (isLoading || !data?.response.line) {
    return "検索中です。";
  }

  const randomNumber: number = Math.floor(
    Math.random() * data.response.line.length
  );
  const line = data.response.line[randomNumber];

  return line;
};
