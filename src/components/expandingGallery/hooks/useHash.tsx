import { useEffect, useState } from 'react';

/*
function copied from react-hash-control
https://github.com/haseeb5555/react-hash-control
*/

export function useHash() {
  const [hash, setHash] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash.slice(1));
    };
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return hash;
}
