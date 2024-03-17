'use client';

import { ReactNode } from 'react';
import { IconContext } from 'react-icons';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <IconContext.Provider value={{}}>{children}</IconContext.Provider>
    </>
  );
}
