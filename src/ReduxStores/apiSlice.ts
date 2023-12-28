import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../models/game.model";
import { apiKey } from "../Api/apiKey";
import { Genre } from "../models/genre.model";
import { Store } from "../models/store.model";
import { Creator } from "../models/creator.model";
import { GameInfo } from "../models/gameInfo.model";
import { StoreDetail } from "../models/storeDetail.model";

interface Games {
  results: Game[];
  next: string | null;
  previous: string | null;
}
interface Genres {
  results: Genre[];
}

interface Stores {
  results: Store[];
}

interface Creators {
  results: Creator[];
  next: string | null;
  previous: string | null;
}

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api/" }),
  endpoints: (buider) => ({
    getGames: buider.query<Games, { pageNo: number; pageSize: number }>({
      query: ({ pageNo, pageSize }) => `games?key=${apiKey}&page=${pageNo}&page_size=${pageSize}`
    }),
    getGamesByGenre: buider.query<Games, { genre: string; pageNo: number; pageSize: number }>({
      query: ({ pageNo, pageSize, genre }) => `games?key=${apiKey}&genres=${genre}&page=${pageNo}&page_size=${pageSize}`
    }),
    getGameInfo: buider.query<GameInfo, string | undefined>({
      query: (number) => `games/${number}?key=${apiKey}`
    }),
    getGenre: buider.query<Genres, { pageNo: number; pageSize: number }>({
      query: ({ pageNo, pageSize }) => `genres?key=${apiKey}&page=${pageNo}&page_size=${pageSize}`
    }),
    getStores: buider.query<Stores, void>({
      query: () => `stores?key=${apiKey}`
    }),
    getStoresDetails: buider.query<StoreDetail, string | undefined>({
      query: (storeNo) => `stores/${storeNo}?key=${apiKey}`
    }),
    getCreators: buider.query<Creators, { pageNo: number; pageSize: number }>({
      query: ({ pageNo, pageSize }) => `creators?key=${apiKey}&page=${pageNo}&page_size=${pageSize}`
    })
  })
});

export const { useGetGamesQuery, useGetGamesByGenreQuery, useGetGenreQuery, useGetStoresQuery, useGetCreatorsQuery, useGetGameInfoQuery, useGetStoresDetailsQuery } = gamesApi;
