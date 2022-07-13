import type { NextPage } from "next";

type Props = {
  prefectures: {
    response: {
      prefecture: [];
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
  // 確認用でAPIの内容を表示させているだけ（後で消す）
  return <div>{props.prefectures.response.prefecture}</div>;
};

export default Home;
