import axios from "axios";

const baseurl = "https://api.themoviedb.org/3";
const apikey = "081822b24fb25af3052003b9fc971c1d";

export const getPopularMovieList = async () => {
  const movie = await axios.get(`${baseurl}/movie/popular?api_key=${apikey}`);
  return movie.data.results;
};

export const getTopRatedMovieList = async () => {
  const movie = await axios.get(`${baseurl}/movie/top_rated?api_key=${apikey}`);
  //   console.log("movie", movie);
  return movie.data.results;
};
export const getNowPlayingMovieList = async () => {
  const movie = await axios.get(`${baseurl}/movie/now_playing?api_key=${apikey}`);
  // console.log("movie", movie);
  return movie.data.results;
};
