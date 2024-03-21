import Hero from "@/components/Hero";
import React from "react";
import axios from "axios";
import { POPULAR_URL, TRENDING_MOVIE_URL, TRENDING_TV_URL } from "@/utils/urls";
import { Movie, MovieAPI } from "@/utils/types";
import MovieList from "@/components/MovieList";

const Home = async () => {
  const { data: popularMovies }: { data: MovieAPI } = await axios.get(POPULAR_URL);
  const { data: trendingMovies }: { data: MovieAPI } = await axios.get(TRENDING_MOVIE_URL);
  const { data: trendingTv }: { data: MovieAPI } = await axios.get(TRENDING_TV_URL);
  return (
    <div>
      <Hero movieList={popularMovies.results} />
      <div className="p-20 flex flex-col gap-14">
        <MovieList category="Trending Movies" movieList={trendingMovies.results} />
        <MovieList category="Trending TV Shows" movieList={trendingTv.results} />
        <MovieList category="Popular" movieList={popularMovies.results} />
      </div>
    </div>
  );
};

export default Home;
