import { MovieDetailsDTO } from "@/utils/types";
import React, { FC } from "react";

interface MovieDetailsProps {
  details: MovieDetailsDTO;
}

const MovieDetails: FC<MovieDetailsProps> = ({ details }) => {
  return (
    <div className="px-10 py-7 bg-black-04 rounded-lg border border-black-08 flex flex-col gap-6">
      <div>
        <p className="font-thin mb-1">Released Date</p>
        <p>{details.release_date}</p>
      </div>
      <div>
        <p className="font-thin mb-2">Languages</p>
        <div className="flex flex-wrap gap-2">
          {details.spoken_languages.map((lang) => (
            <div className="px-2 py-1 rounded bg-black-01 border border-black-08">{lang.english_name}</div>
          ))}
        </div>
      </div>
      <div>
        <p className="font-thin mb-1">Budget</p>
        <p>{Math.floor(details.budget / 1000000)} Millions</p>
      </div>
      <div>
        <p className="font-thin mb-1">Revenue</p>
        <p>{Math.floor(details.revenue / 1000000)} Millions</p>
      </div>
      <div>
        <p className="font-thin mb-2">Genres</p>
        <div className="flex flex-wrap gap-2">
          {details.genres.map((genre) => (
            <div className="px-2 py-1 rounded bg-black-01 border border-black-08">{genre.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
