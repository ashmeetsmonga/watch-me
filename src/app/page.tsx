import Hero from "@/components/Hero";
import React from "react";
import axios from "axios";
import { POPULAR_URL } from "@/utils/urls";
import { Movie, MovieAPI } from "@/utils/types";

const Home = async () => {
  const { data }: { data: MovieAPI } = await axios.get(POPULAR_URL);
  return (
    <div>
      <Hero movieList={data.results} />
    </div>
  );
};

export default Home;
