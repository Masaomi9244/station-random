export type GetStaticProps = () => Promise<{
  props: {
    prefectures: Promise<Prefectures>;
  };
}>;

export type Prefectures = {
  prefectures: {
    response: {
      prefecture: string[];
    };
  };
};

export type PullDownChangeEvent = { target: { value: string } } | undefined;

export type HandleChange = {
  (e: PullDownChangeEvent): void;
};

export type HandleClick = { (): void };

export type Prefecture = string | string[] | undefined;

export type Props = {
  line: string;
  prefecture: Prefecture;
};
