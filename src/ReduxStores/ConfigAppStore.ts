import { configureStore } from "@reduxjs/toolkit";
import { gamesApi } from "./apiSlice";

export const configAppStore = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware)
});

export type RootState = ReturnType<typeof configAppStore.getState>;
export type AppDispatch = typeof configAppStore.dispatch;
