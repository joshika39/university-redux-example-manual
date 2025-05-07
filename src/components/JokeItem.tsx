import { type Joke } from "@/actions/types";
import {Button} from "@/components/ui/button.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useAppDispatch} from "@/store";
import {rateJoke} from "@/slices/jokeSlice.ts";

interface Props {
  joke: Joke;
}

function JokeItem({ joke }: Props) {
  const dispatch = useAppDispatch();
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {joke.setup}
        </CardTitle>
        <CardDescription>
          Type: {joke.type} | Rating: {joke.rating || "Not rated"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p
          className="mb-4"
        >{joke.punchline}</p>
        <CardFooter className="gap-2 px-0">
          Rate:
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Button
                key={star}
                data-state={joke.rating === star ? "active" : "inactive"}
                onClick={() => dispatch(rateJoke({ jokeId: joke.id, rating: star}))}
                size="icon"
                className="data-[state=active]:bg-primary/60"
              >
                {star}
              </Button>
            ))}
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}

export default JokeItem;
