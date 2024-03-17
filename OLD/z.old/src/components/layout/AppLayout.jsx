import { Outlet } from 'react-router-dom';
import HeaderMain from './HeaderMain';
import FooterMain from './FooterMain';

function AppLayout() {
  return (
    <div className="grid h-screen min-w-72 grid-cols-1 grid-rows-[auto_1fr_auto] px-3 sm:px-5">
      <HeaderMain />
      <main className="">
        <Outlet />
      </main>
      <FooterMain />
    </div>
  );
}

export default AppLayout;
