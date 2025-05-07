import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJokes } from "@/actions";
import JokeItem from "./JokeItem";
import { type Joke, type FilterType } from "@/actions/types";
import type { RootState } from "@/store";

interface Props {
  jokes: Joke[];
  loading: boolean;
  error: string | null;
  filter: FilterType;
  fetchJokes: () => void;
}

function JokeList({ jokes, loading, error, filter, fetchJokes }: Props) {
  useEffect(() => {
    fetchJokes();
  }, [fetchJokes]);

  const filteredJokes =
    filter === "all" ? jokes : jokes.filter((j) => j.type === filter);

  if (loading) return <p>Loading jokes...</p>;
  if (error) return <p>Error loading jokes: {error}</p>;

  return (
    <div className="flex flex-col gap-2">
      {filteredJokes.map((joke, index) => (
        <JokeItem key={index} joke={joke} />
      ))}
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  jokes: state.jokeState.jokes,
  loading: state.jokeState.loading,
  error: state.jokeState.error,
  filter: state.filter,
});

export default connect(mapStateToProps, { fetchJokes })(JokeList);
