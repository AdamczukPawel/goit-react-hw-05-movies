import { useState, useParams, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .try(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <h2>
        {movie.title || movie.name} (
        {movie.release_date || movie.first_air_date})
      </h2>
      <Outlet />
      <div> Movie id - {movieId} </div>
    </>
  );
}

export default MovieDetails;
