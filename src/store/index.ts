import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/slices";
import toastMiddleware from "@/store/toastMiddleware.ts";
import {useDispatch, useSelector} from "react-redux";


export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(toastMiddleware.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export interface ThunkApiConfig<E = unknown> {
  state: RootState;
  rejectValue: E;
}
