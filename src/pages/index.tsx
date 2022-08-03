import type { NextPage } from "next";
import Router from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import {
  GetStaticProps,
  HandleChange,
  HandleClick,
  Prefectures,
  PullDownChangeEvent,
} from "src/types";
import { API_URL } from "src/utils/const";

// SGで都道府県一覧を取得
export const getStaticProps: GetStaticProps = async (): Promise<{
  props: {
    prefectures: Promise<Prefectures>;
  };
}> => {
  const url: string = API_URL + "getPrefectures";
  const res: Response = await fetch(url);
  const prefectures: Promise<Prefectures> = await res.json();

  return {
    props: {
      prefectures,
    },
  };
};

const Home: NextPage<Prefectures> = (props: Prefectures) => {
  const [prefecture, setPrefecture]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  // SGで取得した都道府県一覧
  const prefectures: string[] = props.prefectures.response.prefecture;

  // プルダウンが変更されたときに、変数に変更後の値を格納する
  const handleChange: HandleChange = (e: PullDownChangeEvent): void => {
    if (e) {
      setPrefecture(e.target.value);
    }
  };

  // 検索ボタンを押下したとき、リザルト画面に遷移する
  const handleClick: HandleClick = (): void => {
    Router.push({
      pathname: "/result",
      query: { prefecture: prefecture },
    });
  };

  return (
    <div>
      <span>都道府県: </span>
      <select name="prefecture" onChange={handleChange}>
        {prefectures.map((prefecture, i) => {
          return (
            <option key={i} value={prefecture}>
              {prefecture}
            </option>
          );
        })}
      </select>
      <button onClick={() => handleClick()}>検索</button>
    </div>
  );
};

export default Home;
