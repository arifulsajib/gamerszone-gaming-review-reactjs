export interface StoreGame {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface Store {
  id: number;
  name: string;
  domain: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: StoreGame[];
}
