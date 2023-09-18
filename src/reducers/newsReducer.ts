import { newsGetAction } from "../actions/newsActions";
import { createReducer } from '@reduxjs/toolkit';
import { News } from "../types";

export interface NewsState {
    loading: boolean;
    error: null | string;
    news: null | News;
}

export const newsReducer = createReducer({loading: false, error: null, news: null} as NewsState, (builder) => {
  builder
    .addCase(
      newsGetAction.fulfilled,
      (state, action) => {
        state.loading = false;
        state.news = action.payload;
        state.error = null;
      }
    )
    .addCase(
      newsGetAction.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      }
    )
    .addCase(
      newsGetAction.pending,
      (state) => {
        state.loading = true;
        state.error = null;
      }
    )  
})