import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import { Loader } from 'components/Loader/Loader';

function WebappTemplate() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default WebappTemplate;
