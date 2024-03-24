import React, { FC } from "react";
import Description from "./Description";
import Cast from "./Cast";
import { CastAPI, MovieDetailsDTO, Review } from "@/utils/types";
import axios from "axios";
import { MOVIE_CREDITS } from "@/utils/urls";
import MovieDetails from "./MovieDetails";
import Reviews from "./Reviews";

interface DetailsProps {
  movieId: number;
  description: string;
  details: MovieDetailsDTO;
  reviews: Review[];
}

const Details: FC<DetailsProps> = async ({ description, movieId, details, reviews }) => {
  const { data: castDetails }: { data: CastAPI } = await axios.get(MOVIE_CREDITS.replace("{0}", movieId.toString()));
  return (
    <div className="flex gap-4 w-full p-20">
      <div className="flex flex-col gap-4 w-2/3">
        <Description description={description} />
        <Cast cast={castDetails.cast.filter((c) => c.profile_path)} />
      </div>
      <div className="w-1/3">
        <MovieDetails details={details} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

export default Details;
