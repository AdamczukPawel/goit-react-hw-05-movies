import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import css from './Home.module.css';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(console.error);
  }, []);

  if (!trendingMovies) {
    return;
  }

  return (
    <div className={css.home}>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.list}>
        {trendingMovies.map(({ title, id, name }) => {
          return (
            <li key={id} className={css.element}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.link}
              >
                {title || name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
