export async function getGenre() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${import.meta.env.VITE_MOVIE_API}`
    },
  };

  const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
  if(!res.ok){
    console.log("Failed to load Genres")
    throw new Error("Failed to load Genres")
  }
   const data = await res.json()
   return data.genres
}