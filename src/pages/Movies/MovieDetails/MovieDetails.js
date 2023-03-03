import BackLink from 'components/BackLink/BackLink';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../../services/api';
import css from './MovieDetails.module.css';
import { Loader } from '../../../components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const moviePosterImg = `https://image.tmdb.org/t/p/w500`;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
    <div className={css.movieDetails}>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div className={css.mainInfo}>
        <img
          className={css.poster}
          src={
            movie.poster_path
              ? moviePosterImg + movie.poster_path
              : 'https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg'
          }
          alt={movie.title || movie.name}
        />
        <div className={css.movieInformations}>
          <h2>
            {movie.title || movie.name} (
            {movie.release_date || movie.first_air_date})
          </h2>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul className={css.list}>
            {movie.genres.map(genre => {
              return (
                <li key={genre.id} className={css.element}>
                  {genre.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={css.info}>
        <h2>Additional informations</h2>
        <ul className={css.addList}>
          <li className={css.addList__element}>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li className={css.addList__element}>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
