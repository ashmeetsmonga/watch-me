"use client";

import { Movie } from "@/utils/types";
import React, { useState } from "react";
import Card from "./Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface MovieListProps {
  category: string;
  movieList: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ category, movieList }) => {
  const [movieIdx, setMovieIdx] = useState([0, 5]);
  const [time, setTime] = useState(new Date().getTime());

  const handleLeftMovieChange = () => {
    let newMovieStart = Math.max(movieIdx[0] - 5, 0);
    let newMovieEnd = newMovieStart + 5;
    setMovieIdx([newMovieStart, newMovieEnd]);
  };

  const handleRightMovieChange = () => {
    const len = movieList.length;
    let newMovieEnd = Math.min(len, movieIdx[1] + 5);
    let newMovieStart = newMovieEnd - 5;
    console.log([newMovieStart, newMovieEnd]);
    setMovieIdx([newMovieStart, newMovieEnd]);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{category}</h2>
        <div className="rounded-lg px-4 py-2 bg-black-01 flex gap-4">
          <FaArrowLeft className="cursor-pointer" onClick={handleLeftMovieChange} />
          <FaArrowRight className="cursor-pointer" onClick={handleRightMovieChange} />
        </div>
      </div>
      <div className="flex justify-between mt-4 flex-wrap">
        {movieList.slice(movieIdx[0], movieIdx[1]).map((movie) => (
          <Card imgUrl={movie.poster_path + "?" + time} key={movie.id} movieId={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
