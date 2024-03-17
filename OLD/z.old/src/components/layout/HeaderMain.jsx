import { Link } from 'react-router-dom';
import MenuIcon from '../../assets/icons/menu-icon.svg?react';

function HeaderMain() {
  return (
    <header className="mx-auto flex w-full max-w-layout items-start justify-between pb-3 pt-4 sm:pb-4 sm:pt-5">
      <div className="font-raleway ">
        <p className="mb-1 text-4xl font-light leading-[0.765] transition-all  sm:mb-3 sm:text-5xl sm:leading-[0.765]">
          <Link to={'/'}>Theo Ribeiro</Link>
        </p>
        <p className="text-lg font-light leading-[1.2] transition-all sm:text-xl sm:leading-[1.2]">
          cinematographer
        </p>
      </div>
      <button className="flex cursor-pointer items-center justify-center rounded-md bg-neutral-700 p-3 transition-colors duration-300 hover:bg-neutral-400">
        <MenuIcon className="h-5 w-5 fill-neutral-200 sm:h-7 sm:w-7" />
      </button>
    </header>
  );
}

export default HeaderMain;
