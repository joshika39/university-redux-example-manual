import { useEffect, useState } from "react";
import FilterSelect from "./components/FilterSelect";
import JokeList from "./components/JokeList";
import type { Joke } from "./actions/types";

function App() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("https://api.sampleapis.com/jokes/goodJokes");
      const data: Joke[] = await resp.json();
      setJokes(data);
    }

    fetchData();
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline text-center">
        Find your favorite joke
      </h1>
      <FilterSelect />
      <JokeList jokes={jokes} />
    </div>
  );
}

export default App;
