import React from "react";
import MovieHeader from "./components/MovieHeader";
import { MovieDetailsDTO } from "@/utils/types";
import axios from "axios";
import { MOVIE_DETAILS } from "@/utils/urls";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const { data: movieDetails }: { data: MovieDetailsDTO } = await axios.get(MOVIE_DETAILS.replace("{0}", id));
  console.log(movieDetails);
  return (
    <div>
      <MovieHeader title={movieDetails.title} img={movieDetails.backdrop_path} overview={movieDetails.overview} />
    </div>
  );
};

export default Page;
