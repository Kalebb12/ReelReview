const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${import.meta.env.VITE_MOVIE_API}`
  },
};

export async function getGenre() {
  const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
  if(!res.ok){
    console.log("Failed to load Genres")
    throw new Error("Failed to load Genres")
  }
   const data = await res.json()
   return data.genres
}

export async function getLastestMovies (){
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    options
  );
  const data = await response.json();
  return data.results;
}

export async function getTopRatedMovies (){
  const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  const data = await response.json()
  return data.results
}

export const searchMovie = async  (q) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=false&language=en-US&page=1`, options)
  const data = await response.json()
  return data.results
}

export const getMovieById = async  (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  const data = await response.json()
  return data
}

export const getMovieTrailer = async  (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  const data = await response.json()
  return data.results
}

export const getMovieCast = async  (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
  const data = await response.json()
  return data.cast
}