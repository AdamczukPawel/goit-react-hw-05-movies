import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const apiKey = 'befeaf2f7d22fb84137c789361663b87';

export const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day?api_key=' + apiKey);
  return response.data;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    '/search/movie?api_key=' + apiKey + '&query=' + query + '&page=1'
  );
  return response.data;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(`/movie/${id}?api_key=` + apiKey);
  return response.data;
};

export const fetchMovieCredits = async id => {
  const response = await axios.get(
    '/movie/' + id + '/credits?api_key=' + apiKey
  );
  return response.data;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(
    '/movie/' + id + '/reviews?api_key=' + apiKey + '&page=1'
  );
  return response.data;
};
