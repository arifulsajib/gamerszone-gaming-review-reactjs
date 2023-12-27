interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface Platformobj {
  platform: Platform;
}

interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

interface StoreObj {
  store: Store;
}

interface Developer {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface GameInfo {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  released: string;
  background_image: string;
  platforms: Platformobj[];
  stores: StoreObj[];
  developers: Developer[];
  genres: Genre[];
  publishers: Publisher[];
}
