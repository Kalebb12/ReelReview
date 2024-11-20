import { useQuery } from "@tanstack/react-query";
import Home from "./pages/home";
import { getGenre } from "./services/movieApi";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/search";
import MovieDetails from "./ui/movieDetails";
const App = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["genre"],
    queryFn: () => getGenre(),
  });
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;
