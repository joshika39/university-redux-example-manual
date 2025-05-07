import FilterSelect from "./components/FilterSelect";
import JokeList from "./components/JokeList";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline text-center">Find your favorite joke</h1>
      <FilterSelect />
      <JokeList />
    </div>
  );
}

export default App;
