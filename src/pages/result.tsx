import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { useLineResult } from "src/hooks/useLineResult";
import { useStationResult } from "src/hooks/useStationResult";
import { Prefecture, Props } from "src/types";

const Result: NextPage = () => {
  const router: NextRouter = useRouter();
  const prefecture: Prefecture = router.query.prefecture;

  const line: string = useLineResult(prefecture);

  const props: Props = {
    line: line,
    prefecture: prefecture,
  };

  const station: string = useStationResult({ ...props });
  return (
    <div>
      <div>選ばれたのは...</div>
      <h1 className="text-3xl font-bold ml-4">{station} 駅</h1>
    </div>
  );
};

export default Result;
