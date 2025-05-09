import JokeItem from "./JokeItem";
import { type Joke } from "@/actions/types";

interface Props {
  jokes: Joke[];
}

function JokeList({ jokes }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {jokes.map((joke, index) => (
        <JokeItem key={index} joke={joke} />
      ))}
    </div>
  );
}

export default JokeList;
