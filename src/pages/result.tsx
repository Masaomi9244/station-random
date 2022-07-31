import { NextPage } from "next";
import { useRouter } from "next/router";
import { useLineResult } from "src/hooks/useLineResult";
import { useStationResult } from "src/hooks/useStationResult";

export type Props = {
  line: string;
  prefecture: string | string[] | undefined;
};

const Result: NextPage = () => {
  const router = useRouter();
  const prefecture = router.query.pre;

  const line = useLineResult(prefecture);

  const props: Props = {
    line: line,
    prefecture: prefecture,
  };

  const station = useStationResult({ ...props });
  return (
    <div>
      <div>選ばれたのは...</div>
      <ul>
        <li>
          <h1 className="text-3xl font-bold ml-4">{station} 駅</h1>
        </li>
      </ul>
    </div>
  );
};

export default Result;
