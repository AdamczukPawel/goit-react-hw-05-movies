import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'components/Nav/Nav';

function WebappTemplate() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default WebappTemplate;
