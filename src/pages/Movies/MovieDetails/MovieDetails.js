import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../../services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const moviePosterImg = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);
    };
    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <div>
        <img
          src={
            movie.poster_path
              ? moviePosterImg + movie.poster_path
              : 'https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg'
          }
          alt={movie.title || movie.name}
        />
      </div>
      <h2>
        {movie.title || movie.name} (
        {movie.release_date || movie.first_air_date})
      </h2>
      <p>User score: {Math.round(movie.vote_average * 10)}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <ul>
        {movie.genres.map(genre => {
          return <li key={genre.id}>{genre.name}</li>;
        })}
      </ul>
      <div>
        <p>Additional informations</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
