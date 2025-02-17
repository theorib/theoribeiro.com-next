'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { z } from 'zod';

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

  const currentState = z
    .object({ pathname: z.string().optional() })
    .default({})
    .parse(window.history.state ?? {});

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

  useEffect(() => {
    console.log('useUrlPathName', pathName);
    if (!hasPageLoaded.current) {
      setPathName(getUrlPathName());
      hasPageLoaded.current = true;
      return;
    }
    setUrlPathName(pathName);
  }, [pathName]);

  return { pathName, setPathName };
}
