'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

type PathName = string;

export function getUrlPathName(): PathName {
  if (typeof window === 'undefined') return '/';
  return window.location.pathname;
}

export function setUrlPathName(path: PathName): void {
  if (typeof window === 'undefined') return;
  window.addEventListener('popstate', handlePathNameChange);

  updateUrlPathName(path);

  window.removeEventListener('popstate', handlePathNameChange);
}

export function updateUrlPathName(path: PathName): void {
  if (typeof window === 'undefined') return;
  const currentState = window.history.state || {};
  currentState.pathname = path;
  const url = new URL(window.location.toString());
  url.pathname = path;
  window.history.pushState({ ...currentState }, '', url);
}

function handlePathNameChange(event: PopStateEvent) {
  event.preventDefault();
}

interface UseUrlPathNameReturn {
  pathName: PathName;
  setPathName: Dispatch<SetStateAction<PathName>>;
}

export default function useUrlPathName(): UseUrlPathNameReturn {
  const [pathName, setPathName] = useState<PathName>('/');
  const hasPageLoaded = useRef<boolean>(false);
  // const isHandlingPopState = useRef<boolean>(false);

  useEffect(() => {
    console.log('useUrlPathName', pathName);

    // const handlePopState = () => {
    //   isHandlingPopState.current = true;
    //   setPathName(getUrlPathName());
    // };
    // window.addEventListener('popstate', handlePopState);

    /**
     * Set the hash state to the current URL hash when the page first loads
     * This is necessary because the hash is not available during SSR
     * We then set the hasPageLoaded ref to true to prevent further updates
     */
    // if (!hasPageLoaded.current && !isHandlingPopState.current) {
    //   setPathName(getUrlPathName());
    //   hasPageLoaded.current = true;
    // }
    if (!hasPageLoaded.current) {
      console.log('init');

      setPathName(getUrlPathName());
      hasPageLoaded.current = true;
      return;
    }

    /**
     * Update the URL hash whenever the hash state changes
     */
    // if (hasPageLoaded.current && !isHandlingPopState.current)
    //   setUrlPathName(pathName);
    setUrlPathName(pathName);

    // isHandlingPopState.current = false;
    return () => {
      // window.removeEventListener('popstate', handlePopState);
    };
  }, [pathName]);

  return { pathName, setPathName };
}
