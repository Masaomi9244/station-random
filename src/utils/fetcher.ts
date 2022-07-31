export const fetcher: (url: string) => Promise<any> = async (url: string) => {
  const response: Response = await fetch(url);
  const json: Promise<any> = await response.json();
  return json;
};
