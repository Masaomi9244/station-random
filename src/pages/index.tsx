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
  // プルダウン変更後の値を保持する変数
  let selectPrefecture: string = "北海道";

  // プルダウンが変更されたときに、変数に変更後の値を格納する
  const handleChange = (e: { target: { value: string } } | undefined) => {
    if (e) {
      selectPrefecture = e.target.value;
    }
  };

  const prefectures: string[] = props.prefectures.response.prefecture;

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
    </div>
  );
};

export default Home;
