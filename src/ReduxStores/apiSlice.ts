import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../models/game.model";
import { apiKey } from "../Api/apiKey";
import { Genre } from "../models/genre.model";
import { Store } from "../models/store.model";

interface Games {
  results: Game[];
}
interface Genres {
  results: Genre[];
}

interface Stores {
  results: Store[];
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
    getGenre: buider.query<Genres, { pageNo: number; pageSize: number }>({
      query: ({ pageNo, pageSize }) => `genres?key=${apiKey}&page=${pageNo}&page_size=${pageSize}`
    }),
    getStores: buider.query<Stores, void>({
      query: () => `stores?key=${apiKey}`
    })
  })
});

export const { useGetGamesQuery, useGetGamesByGenreQuery, useGetGenreQuery, useGetStoresQuery } = gamesApi;
