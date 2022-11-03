import { Episode } from "~/types";

import CharacterAvatar from "~/components/CharacterAvatar";

interface Props {
  episode: Episode;
}

export default function EpisodeCard({ episode }: Props) {
  return (
    <article className="flex flex-col gap-3 bg-white p-4 rounded-md shadow-sm h-full">
      <hgroup>
        <h2 className="font-semibold">{episode.name}</h2>
        <h3 className="text-sm">{episode.airDate}</h3>
      </hgroup>
      <ul className="flex gap-1">
        {episode.characterIds.slice(0, 5).map((id: number) => (
          <li key={id}>
            <CharacterAvatar id={id} />
          </li>
        ))}
      </ul>
    </article>
  );
}
