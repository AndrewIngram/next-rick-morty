import { use } from "react";
import DataLoader from "dataloader";

const loader = new DataLoader(
  async (paths: readonly string[]) => {
    return Promise.all(
      paths.map((path) =>
        fetch(`https://hacker-news.firebaseio.com/v0/${path}.json`)
      )
    );
  },
  { cache: false }
);

export async function fetchHn(path: string) {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${path}.json`);

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }

  return res.json();
}

export function useHn(path: string) {
  return use(fetchHn(path));
}
