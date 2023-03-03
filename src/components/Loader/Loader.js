import { Oval } from 'react-loader-spinner';
import css from '../../components/Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Oval
        height={80}
        width={80}
        color="#FF0000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#FF0000"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
