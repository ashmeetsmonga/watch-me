const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const IMAGE_URL = process.env.IMAGE_URL;

export const POPULAR_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
export const TRENDING_MOVIE_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
export const TRENDING_TV_URL = `${BASE_URL}/trending/tv/day?api_key=${API_KEY}`;
export const BACKDROP_IMAGE_URL = IMAGE_URL;
export const MOVIE_DETAILS = `${BASE_URL}/movie/{0}?api_key=${API_KEY}`;
export const MOVIE_CREDITS = `${BASE_URL}/movie/{0}/credits?api_key=${API_KEY}`;
