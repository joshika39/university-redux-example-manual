import {createAsyncThunk} from "@reduxjs/toolkit";
import type {Joke} from "@/actions/types.ts";

export const fetchJokes = createAsyncThunk('jokes/fetchJokes', async () => {
  const resp = await fetch('https://api.sampleapis.com/jokes/goodJokes');
  const data: Joke[] = await resp.json();
  return data;
});