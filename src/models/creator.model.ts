export interface CreatorPosition {
  id: number;
  name: string;
  slug: string;
}

export interface CreatorGame {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface Creator {
  id: number;
  name: string;
  slug: string;
  image: string;
  image_background: string;
  games_count: number;
  positions: CreatorPosition[];
  games: CreatorGame[];
}
