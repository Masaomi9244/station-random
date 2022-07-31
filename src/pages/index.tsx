import type { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";

type Props = {
  prefectures: {
    response: {
      prefecture: string[];
    };
  };
};

// SGで都道府県一覧を取得
export const getStaticProps = async () => {
  const URL: string =
    "http://express.heartrails.com/api/json?method=getPrefectures";
  const res: Response = await fetch(URL);
  const prefectures: Promise<Props> = await res.json();

  return {
    props: {
      prefectures,
    },
  };
};

const Home: NextPage<Props> = (props: Props) => {
  const [prefecture, setPrefecture] = useState("");

  // SGで取得した都道府県一覧
  const prefectures: string[] = props.prefectures.response.prefecture;

  // プルダウンが変更されたときに、変数に変更後の値を格納する
  const handleChange = (e: { target: { value: string } } | undefined) => {
    if (e) {
      setPrefecture(e.target.value);
    }
  };

  // 検索ボタンを押下したとき、リザルト画面に遷移する
  const handleClick = () => {
    Router.push({
      pathname: "/result",
      query: { pre: prefecture },
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
