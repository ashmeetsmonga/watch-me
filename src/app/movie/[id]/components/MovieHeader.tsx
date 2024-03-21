import React, { FC } from "react";

interface MovieHeaderProps {
  title: string;
  overview: string;
  img: string;
}

const MovieHeader: FC<MovieHeaderProps> = ({ title, overview, img }) => {
  return (
    <div>
      <img src={"https://image.tmdb.org/t/p/original" + img} alt="hero" className="h-screen w-full object-cover" />
      <div className="absolute bottom-0 pb-10 w-full flex flex-col items-center bg-gradient-to-b from-transparent to-black">
        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-6xl font-black capitalize text-center">{title}</h1>
          <p className="text-center mt-4">{overview}</p>
          <div className="flex justify-center mt-8">
            <button className="bg-red-01 py-3 px-6 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
