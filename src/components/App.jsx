// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import WebappTemplate from './WebappTemplate/WebappTemplate';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import NotFound from './NotFound/NotFound';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<WebappTemplate />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
