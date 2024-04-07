'use client';

import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

type Hash = string | null;

/**
 * Get the current hash from the URL, excluding the '#' character.
 * @returns A string with the current hash or null if there is no hash.
 */
function getUrlHash(): Hash {
  if (typeof window === 'undefined') return null;
  return window.location.hash.slice(1) || null;
}

/**
 * Sets the URL hash parameter without causing a page reload.
 * If the hash is null, the URL hash is removed.
 * @param hash A string representing the new hash or null to remove the hash.
 */
function setUrlHash(hash: Hash): void {
  if (typeof window === 'undefined') return;
  if (hash === null) {
    const url = window.location.toString();
    const cleanUrl = url.substring(0, url.indexOf('#'));
    window.history.replaceState({}, document.title, cleanUrl);
  } else {
    window.location.hash = hash;
  }
}

/**
 * Hook to persist state variables in the URL hash
 * @returns A tuple with the current hash and a function to update it.
 */
export default function useHash(): [Hash, Dispatch<SetStateAction<Hash>>] {
  const [hash, setHash] = useState<Hash>(null);
  const hasPageLoaded = useRef<boolean>(false);

  /**
   * This effect tracks url hash changes and
   * updates the url hash whenever there is a change in the hash state
   */
  useEffect(() => {
    /**
     * Set the hash state to the current URL hash when the page first loads
     * This is necessary because the hash is not available during SSR
     * We then set the hasPageLoaded ref to true to prevent further updates
     */
    if (!hasPageLoaded.current) {
      setHash(getUrlHash());
      hasPageLoaded.current = true;
    }
    /**
     * Update the URL hash whenever the hash state changes
     */
    if (hasPageLoaded.current) {
      setUrlHash(hash);
    }
  }, [hash]);

  return [hash, setHash];
}
