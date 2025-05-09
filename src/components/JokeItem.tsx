import { type Joke } from "@/actions/types";
import { Button } from "@/components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

interface Props {
  joke: Joke;
}

function JokeItem({ joke }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{joke.setup}</CardTitle>
        <CardDescription>
          Type: {joke.type} | Rating: {joke.rating || "Not rated"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{joke.punchline}</p>
        <CardFooter className="gap-2 px-0">
          Rate:
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Button
                key={star}
                data-state={joke.rating === star ? "active" : "inactive"}
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
