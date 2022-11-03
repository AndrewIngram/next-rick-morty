import { Episode } from "~/types";

import EpisodeCard from "~/components/EpisodeCard";

interface Props {
  episodes: Episode[];
}

export default function EpisodeList({ episodes }: Props) {
  return (
    <ol className="grid grid-cols-3 gap-4">
      {episodes.map((episode) => (
        <li key={episode.id}>
          <EpisodeCard episode={episode} />
        </li>
      ))}
    </ol>
  );
}
