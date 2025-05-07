import {createSlice} from '@reduxjs/toolkit';
import {type JokeState} from '@/actions/types';
import {fetchJokes} from "@/actions";

const initialState: JokeState = {
  loading: false,
  jokes: [],
  error: null
};

const jokeSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    rateJoke(state, action) {
      const {jokeId, rating} = action.payload;
      const joke = state.jokes.find((j) => j.id === jokeId);
      if (joke) {
        joke.rating = rating;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJokes.fulfilled, (state, action) => {
        state.loading = false;
        state.jokes = action.payload;
      })
      .addCase(fetchJokes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch jokes';
      });
  }
});

export const {rateJoke} = jokeSlice.actions;
export default jokeSlice.reducer;