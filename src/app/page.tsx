import { groupBy } from "lodash";

import { getAllEpisodes } from "~/api";
import EpisodeList from "~/components/EpisodeList";

export const config = {
  dynamic: "force-dynamic",
};

export const runtime = "experimental-edge";

export default async function HomepagePage() {
  const { results } = await getAllEpisodes();

  return (
    <ol className="flex flex-col gap-8 my-2">
      {Object.entries(groupBy(results, (episode) => episode.season)).map(
        ([season, episodes]) => (
          <li key={season} className="flex flex-col gap-4">
            <h2 className="font-bold text-lg pb-0.5 border-b-teal-500 border-b-2">
              Season {season}
            </h2>
            <EpisodeList episodes={episodes} />
          </li>
        )
      )}
    </ol>
  );
}
