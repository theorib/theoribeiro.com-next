import { PiInstagramLogoThin } from 'react-icons/pi';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
function FooterMain() {
  return (
    <footer className="mx-auto w-full max-w-layout px-5 pb-4 font-light">
      <p className="my-12 sm:text-lg">
        Theo Ribeiro is an award winning cinematographer based in London, UK.
      </p>
      <div className="mb-12 flex flex-col sm:text-lg">
        {/* html field for phone  */}
        <a
          href="mailto:theo@theoribeiro.com"
          className="link link-accent"
          title="Email"
        >
          theo@theoribeiro.com
        </a>
        <span>
          Mobile (UK):{' '}
          <a href="tel:+44 7415 303-847" title="Phone (UK)">
            +44 7415 303847
          </a>
        </span>
      </div>
      <div className="flex items-end justify-between">
        <p
          aria-label="Copyright Notice"
          className="text-md text-horizon-blue-200"
        >
          ©{new Date().getFullYear()} Theo Ribeiro, all rights reserved.{' '}
        </p>

        <Link
          href="https://www.instagram.com/theorib/"
          title="Instagram"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'flex border-slate-200 bg-neutral-700 p-2 py-5 sm:py-7',
          )}
          target="_blank"
        >
          <PiInstagramLogoThin className="h-7 w-7 text-neutral-300 sm:h-10 sm:w-10" />
        </Link>
      </div>
    </footer>
  );
}

export default FooterMain;
