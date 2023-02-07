import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import WebappTemplate from './WebappTemplate/WebappTemplate';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const MovieDetails = lazy(() =>
  import('pages/Movies/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('pages/Movies/Cast/Cast'));
const Reviews = lazy(() => import('pages/Movies/Reviews/Reviews'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebappTemplate />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
