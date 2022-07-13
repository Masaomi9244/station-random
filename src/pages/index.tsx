import type { NextPage } from "next";

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
  const prefectures: string[] = props.prefectures.response.prefecture;

  return (
    <div>
      <span>都道府県: </span>
      <select name="prefecture">
        {prefectures.map((prefecture, i) => {
          return (
            <option key={i} value={prefecture}>
              {prefecture}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Home;
