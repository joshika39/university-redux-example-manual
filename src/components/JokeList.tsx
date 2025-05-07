import {useEffect} from "react";
import {fetchJokes} from "@/actions";
import JokeItem from "./JokeItem";
import {useAppDispatch, useAppSelector} from "@/store";

function JokeList() {
  const dispatch = useAppDispatch();
  const {jokes, loading, error} = useAppSelector((state) => state.jokes);
  const filter = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchJokes());
  }, [dispatch]);

  const filteredJokes =
    filter === "all" ? jokes : jokes.filter((j) => j.type === filter);

  if (loading) return <p>Loading jokes...</p>;
  if (error) return <p>Error loading jokes: {error}</p>;

  return (
    <div className="flex flex-col gap-2">
      {filteredJokes.map((joke, index) => (
        <JokeItem key={index} joke={joke}/>
      ))}
    </div>
  );
}

export default JokeList;
