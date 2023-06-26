import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import Product from "./Product";
import { Button } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Slider from "./components/Slider/Slider";
import slides from "./data/carouselData.json";
import Trending from "./components/Movie/Trending";
import { getPopularMovieList, getTopRatedMovieList, getNowPlayingMovieList } from "./data/api";

import TopRated from "./components/Movie/TopRated";
import NowPlaying from "./components/Movie/NowPlaying";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getPopularMovieList().then((result) => {
      setPopularMovies(result);
    });
    getTopRatedMovieList().then((result) => {
      setTopRatedMovies(result);
    });
    getNowPlayingMovieList().then((result) => {
      setNowPlayingMovies(result);
    });
  }, []);
  // console.log(popularMovies);

  return (
    <div>
      {/* <Product /> */}
      <NavigationBar />
      {/* <Product /> */}
      <Slider data={slides} />
      <div>
        <Trending data={popularMovies} />
      </div>
      <TopRated data={topRatedMovies} />
      <NowPlaying data={nowPlayingMovies} />
    </div>
  );
}

export default App;
