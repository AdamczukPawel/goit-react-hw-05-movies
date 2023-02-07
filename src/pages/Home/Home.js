import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';

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
    <>
      <div>Trending today</div>
      <ul>
        {trendingMovies.map(({ title, id, name }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
