import React from "react";
import MovieHeader from "./components/MovieHeader";
import { MovieDetailsDTO } from "@/utils/types";
import axios from "axios";
import { MOVIE_DETAILS } from "@/utils/urls";
import Details from "./components/Details";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const { data: movieDetails }: { data: MovieDetailsDTO } = await axios.get(MOVIE_DETAILS.replace("{0}", id));
  return (
    <div className="">
      <MovieHeader title={movieDetails.title} img={movieDetails.backdrop_path} overview={movieDetails.overview} />
      <Details description={movieDetails.overview} movieId={movieDetails.id} />
    </div>
  );
};

export default Page;
