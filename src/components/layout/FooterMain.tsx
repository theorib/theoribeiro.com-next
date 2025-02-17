import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
function FooterMain() {
  return (
    <footer className="max-w-layout mx-auto w-full px-5 pb-4 text-base font-light">
      <p className="my-12">
        Theo Ribeiro is an award winning cinematographer based in London, UK.
      </p>
      <div className="mb-12 flex flex-col">
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
            'flex cursor-pointer hover:bg-transparent hover:text-neutral-400',
          )}
          target="_blank"
        >
          <Instagram size={32} strokeWidth={0.75} className="size-10" />
        </Link>
      </div>
    </footer>
  );
}

export default FooterMain;
