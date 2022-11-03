import { Episode } from "~/types";

import CharacterAvatar from "~/components/CharacterAvatar";

interface Props {
  episode: Episode;
}

export default function EpisodeCard({ episode }: Props) {
  return (
    <article className="flex flex-col gap-3 bg-white p-4 rounded-md shadow-sm h-full">
      <hgroup className="flex flex-col gap-1">
        <div className="flex gap-2 items-baseline">
          <span className="bg-lime-500 text-white font-bold text-sm rounded-full w-5 h-5 flex flex-none items-center justify-center">
            {episode.episode}
          </span>
          <h2 className="font-semibold">{episode.name}</h2>
        </div>
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
