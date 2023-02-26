import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../services/api';
import css from './Movies.module.css';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useSearchParams('');
  const [foundMovies, setFoundMovies] = useState();
  const [inputedQuery, setInputedQuery] = useState('');
  const movieQuery = searchQuery.get('query') ?? '';
  const location = useLocation();

  const handleInputChange = event => {
    setInputedQuery(event.target.value);
    console.log(inputedQuery);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchQuery({ query: inputedQuery });
  };

  useEffect(() => {
    if (!movieQuery) return;
    const getFoundMovies = async () => {
      const movieList = await fetchMoviesByQuery(movieQuery);
      setFoundMovies(movieList.results);
      console.log(movieList.results);
    };
    getFoundMovies();
  }, [movieQuery]);

  return (
    <div className={css.movie}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name={movieQuery}
          value={inputedQuery}
          onChange={handleInputChange}
          className={css.input}
        ></input>
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      <ul className={css.list}>
        {!foundMovies ? (
          <></>
        ) : (
          foundMovies.map(movie => {
            return (
              <li key={movie.id} className={css.element}>
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                  className={css.link}
                >
                  {movie.title || movie.name}
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Movies;
