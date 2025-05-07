export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
  rating?: number;
}

export interface JokeState {
  loading: boolean;
  jokes: Joke[];
  error: string | null;
}

export type FilterType = "all" | "general" | "programming" | "knock-knock";
