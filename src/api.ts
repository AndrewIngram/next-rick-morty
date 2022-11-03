import { cache } from "react";

import { Episode, Character } from "./types";

import DataLoader from "dataloader";

const BASE_URL = "https://rickandmortyapi.com/api/";

const fetchFromApi = cache(async (path: string) => {
  console.log("Loading...", path);

  const response = await fetch(`${BASE_URL}${path}`);
  return response.json();
});

function extractTrailingId(url: string) {
  const parts = url.split("/");
  return parseInt(parts[parts.length - 1], 10);
}

function transformEpisode(input: any): Episode {
  const [, season, episode] = input.episode.split(/[SE]/);

  return new Episode(
    input.id,
    input.name,
    input.air_date,
    parseInt(season, 10),
    parseInt(episode, 10),
    input.characters.map(extractTrailingId)
  );
}

export const episodes = cache(
  () =>
    new DataLoader<number, Episode>(async (ids: readonly number[]) =>
      (await fetchFromApi(`episode/${ids.join(",")}`)).map(transformEpisode)
    )
);

export const location = cache(
  () =>
    new DataLoader(async (ids: readonly number[]) =>
      fetchFromApi(`location/${ids.join(",")}`)
    )
);

function transformCharacter(input: any): Character {
  return new Character(input.id, input.name, input.image);
}

export const characters = cache(
  () =>
    new DataLoader<number, Character>(
      async (ids: readonly number[]) =>
        (await fetchFromApi(`character/${ids.join(",")}`)).map(
          transformCharacter
        ),
      {
        batchScheduleFn: (callback) => setTimeout(callback, 0),
      }
    )
);

export async function getAllEpisodes(page: number = 1) {
  const { info, results } = await fetchFromApi(`episode?page=${page}`);

  return { info, results: results.map(transformEpisode) };
}
