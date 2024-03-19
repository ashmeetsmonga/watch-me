const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const IMAGE_URL = process.env.IMAGE_URL;

export const POPULAR_URL = `${BASE_URL}/popular?api_key=${API_KEY}`;
export const BACKDROP_IMAGE_URL = IMAGE_URL;
