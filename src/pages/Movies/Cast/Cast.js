import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../../services/api';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const actorProfileImg = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    const getMovieCast = async () => {
      const movieCast = await fetchMovieCredits(movieId);

      setCast(movieCast.cast);
      console.log(Math.random());
    };
    getMovieCast();
  }, [movieId]);

  return (
    <>
      {cast.length === 0 ? (
        <p>Sorry, we don't have informations about the cast of this movie</p>
      ) : (
        <ul className={css.list}>
          {cast.map(actor => {
            return (
              <li key={actor.id} className={css.element}>
                <img
                  className={css.image}
                  src={
                    actor.profile_path
                      ? actorProfileImg + actor.profile_path
                      : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                  }
                  alt={actor.name}
                />
                <div>
                  <h3 className={css.name}>{actor.name}</h3>
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
