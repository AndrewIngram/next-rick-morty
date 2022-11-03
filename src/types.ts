export class Episode {
  constructor(
    public id: number,
    public name: string,
    public airDate: string,
    public season: number,
    public episode: number,
    public characterIds: number[]
  ) {}
}

export class Character {
  constructor(public id: number, public name: string, public image: string) {}
}
