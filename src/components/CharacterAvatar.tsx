import Image from "next/image";

import { characters } from "~/api";

interface Props {
  id: number;
}

export default async function CharacterAvatar({ id }: Props) {
  const character = await characters().load(id);

  return (
    <Image
      src={character.image}
      width={32}
      height={32}
      alt={character.name}
      unoptimized={true}
      className="rounded-full"
    />
  );
}
