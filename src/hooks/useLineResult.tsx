import {
  Prefecture,
  UseLineFetchResponse,
  UseLineResult,
} from "src/types/result";
import { API_URL } from "src/utils/const";
import { useLineFetch } from "./useLineFetch";

export const useLineResult: UseLineResult = (Props: Prefecture): string => {
  const url: string = API_URL + "getLines&prefecture=" + Props;

  const { data, error, isLoading }: UseLineFetchResponse = useLineFetch(url);
  if (error) {
    return "検索中にエラーが発生しました。";
  }

  if (isLoading || !data?.response.line) {
    return "検索中です。";
  }

  const randomNumber: number = Math.floor(
    Math.random() * data.response.line.length
  );

  return data.response.line[randomNumber];
};
