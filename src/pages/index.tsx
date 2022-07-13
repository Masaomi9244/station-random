import type { NextPage } from "next";

type Props = {
  prefectures: {
    response: {
      prefecture: string[];
    };
  };
};

type PreObj = {
  id: number;
  prefecture: string;
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

  // prefecturesをkeyがあるオブジェクトに格納する
  let preObjArray: PreObj[] = [];
  for (let i = 0; i < prefectures.length; i++) {
    const preObj: PreObj = {
      id: i,
      prefecture: prefectures[i],
    };
    preObjArray.push(preObj);
  }

  return (
    <div>
      <span>都道府県: </span>
      <select name="prefecture">
        {preObjArray.map((preObj) => {
          return <option key={preObj.id}>{preObj.prefecture}</option>;
        })}
      </select>
    </div>
  );
};

export default Home;
