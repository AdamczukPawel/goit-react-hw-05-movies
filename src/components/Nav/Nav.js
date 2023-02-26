import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

function Nav() {
  return (
    <nav className={css.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.active : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? css.active : undefined)}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Nav;
