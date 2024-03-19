"use client";
import { Movie } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface HeroProps {
  movieList: Movie[];
}

const Hero: React.FC<HeroProps> = ({ movieList }) => {
  const [movieIdx, setMovieIdx] = useState(0);

  return (
    <div>
      <img src={"https://image.tmdb.org/t/p/original" + movieList[movieIdx].backdrop_path} alt="hero" className="h-screen w-full object-cover" />
      <div className="absolute bottom-0 pb-10 w-full flex flex-col items-center bg-gradient-to-b from-transparent to-black">
        <div className="w-1/2 flex flex-col items-center">
          <div className="flex justify-center gap-10 items-center">
            <FaArrowLeft size={30} className="cursor-pointer" onClick={() => setMovieIdx((prev) => (prev === 0 ? movieList.length - 1 : prev - 1))} />
            <h1 className="text-6xl font-black capitalize">{movieList[movieIdx].original_title}</h1>
            <FaArrowRight size={30} className="cursor-pointer" onClick={() => setMovieIdx((prev) => (prev === movieList.length - 1 ? 0 : prev + 1))} />
          </div>
          <p className="text-center mt-4">{movieList[movieIdx].overview}</p>
          <button className="bg-red-01 py-3 px-6 rounded mt-8">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
