import { useState, useParams, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .try(data => {
        setMovie(data);
      })
      .catch(console.error);
  }, [movieId]);

   if (!movie) {
     return;
   }

  return (
    <>
      <Outlet />
    </>
  );
}

export default MovieDetails;
