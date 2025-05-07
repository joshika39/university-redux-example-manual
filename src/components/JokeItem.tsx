import React from "react";
import { connect } from "react-redux";
import { rateJoke } from "../actions";
import { type Joke } from "../actions/types";

interface Props {
  joke: Joke;
  rateJoke: (id: number, rating: number) => void;
}

function JokeItem({ joke, rateJoke }: Props) {
  return (
    <li>
      <strong>{joke.setup}</strong> — {joke.punchline}
      <br />
      Type: {joke.type} | Rating: {joke.rating || "Not rated"}
      <br />
      Rate:
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => rateJoke(joke.id, star)}>
          {star}
        </button>
      ))}
    </li>
  );
}

export default connect(null, { rateJoke })(JokeItem);
