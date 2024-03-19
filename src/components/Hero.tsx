import { Movie } from "@/utils/types";
import { BACKDROP_IMAGE_URL } from "@/utils/urls";
import React from "react";

interface HeroProps {
  movieList: Movie[];
}

const Hero: React.FC<HeroProps> = ({ movieList }) => {
  return (
    <div className="">
      <img src={BACKDROP_IMAGE_URL + movieList[0].backdrop_path} alt="hero" className="h-screen w-full object-cover" />
      <div className="absolute bottom-0 pb-10 w-full flex flex-col items-center bg-gradient-to-b from-transparent to-black">
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-6xl font-black capitalize">{movieList[0].original_title}</h1>
          <p className="text-center mt-4">{movieList[0].overview}</p>
          <button className="bg-red-01 py-3 px-6 rounded mt-8">Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
