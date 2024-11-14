import { useQuery } from "@tanstack/react-query";
import Header from "./ui/header";
import { getGenre } from "./services/movieApi";
import MovieSection from "./ui/movieSection";

const App = () => {
  const {isPending,error,data} = useQuery({
    queryKey:["genre"],
    queryFn: () => getGenre(),
  })
  return (
    <div>
      <Header/>
      <MovieSection/>
    </div>
  );
}
 
export default App;