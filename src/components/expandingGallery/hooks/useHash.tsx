'use client';

import { useEffect, useRef, useState } from 'react';

type Hash = string | null;

// Hook to persist state variables in the URL hash
export default function useHash(): [Hash, (newState: Hash) => void] {
  const [hash, updateHash] = useState<Hash>(null);
  const setHashRef = useRef<((newState: string | null) => void) | null>(null);

  useEffect(() => {
    // console.log('running useHash');

    setHashRef.current = function (newState: Hash) {
      if (newState === null) {
        const url = window.location.toString();
        const cleanUrl = url.substring(0, url.indexOf('#'));
        window.history.replaceState({}, document.title, cleanUrl);
      }
      if (newState) window.location.hash = newState;

      updateHash(newState);
    };
  }, [hash]);

  function setHash(newState: Hash): void {
    if (setHashRef.current) {
      setHashRef.current(newState);
      return;
    }
    updateHash(newState);
  }

  return [hash, setHash];
}
