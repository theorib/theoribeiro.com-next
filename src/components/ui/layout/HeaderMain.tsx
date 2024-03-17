import paths from '@/paths';
import Link from 'next/link';

function HeaderMain() {
  return (
    <header className="mx-auto flex w-full max-w-layout items-start justify-between pb-3 pt-4 sm:pb-5 sm:pt-6">
      <div className="">
        <p className="mb-1 text-4xl font-light leading-[0.765] transition-all  sm:mb-3 sm:text-5xl sm:leading-[0.765] font-raleway">
          <Link href={paths.homePage()}>Theo Ribeiro</Link>
        </p>
        <p className="text-lg font-light leading-[1.2] transition-all sm:text-xl sm:leading-[1.2]">
          cinematographer
        </p>
      </div>
    </header>
  );
}

export default HeaderMain;
