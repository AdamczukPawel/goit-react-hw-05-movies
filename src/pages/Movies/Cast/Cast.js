import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../../services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const actorProfileImg = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    const getMovieCast = async () => {
      const movieCast = await fetchMovieCredits(movieId);
      setCast(movieCast.cast);
    };
    getMovieCast();
  }, []);

  return (
    <>
      {cast.length === 0 ? (
        <p>Sorry, we don't have informations about the cast of this movie</p>
      ) : (
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? actorProfileImg + actor.profile_path
                      : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                  }
                  alt={actor.name}
                />
                <div>
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
