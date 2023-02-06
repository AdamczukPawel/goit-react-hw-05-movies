import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const apiKey = 'befeaf2f7d22fb84137c789361663b87';

export const fetchTrendingTodayMovies = async () => {
  const response = await axios.get('/trending/all/day?api_key=' + apiKey);
  return response;
};

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    '/search/movie?api_key=' + apiKey + '&query=' + query + '&page=1'
  );
  return response;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(
    '/search/movie/' + id + '?api_key=' + apiKey
  );
  return response;
};

export const fetchMovieCredits = async id => {
  const response = await axios.get(
    '/search/movie/' + id + '/credits?api_key=' + apiKey
  );
  return response;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(
    '/search/movie/' + id + '/reviews?api_key=' + apiKey + '&page=1'
  );
  return response;
};
