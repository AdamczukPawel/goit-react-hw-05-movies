import { Link } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import css from './BackLink.module.css';

const BackLink = ({ to, children }) => {
  return (
    <>
      <Link to={to} className={css.button}>
        <HiChevronLeft size="24" className={css.arrow} />
        {children}
      </Link>
    </>
  );
};

export default BackLink;
