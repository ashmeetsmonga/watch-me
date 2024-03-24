import React from "react";
import MovieHeader from "./components/MovieHeader";
import { MovieDetailsDTO, ReviewAPI } from "@/utils/types";
import axios from "axios";
import { MOVIE_DETAILS, MOVIE_REVIEWS } from "@/utils/urls";
import Details from "./components/Details";
import Reviews from "./components/Reviews";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const { data: movieDetails }: { data: MovieDetailsDTO } = await axios.get(MOVIE_DETAILS.replace("{0}", id));
  const { data: reviewData }: { data: ReviewAPI } = await axios.get(MOVIE_REVIEWS.replace("{0}", id));
  return (
    <div className="">
      <MovieHeader title={movieDetails.title} img={movieDetails.backdrop_path} overview={movieDetails.tagline} />
      <Details description={movieDetails.overview} movieId={movieDetails.id} details={movieDetails} reviews={reviewData.results} />
    </div>
  );
};

export default Page;
