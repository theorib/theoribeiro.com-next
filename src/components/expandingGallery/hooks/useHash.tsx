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
  const firstCharPosition = 1;
  return window.location.hash.slice(firstCharPosition) || null;
}

/**
 * Sets the URL hash parameter without causing a page reload.
 * If the hash is null, the URL hash is removed.
 * This function keeps the current URL state and only updates the hash.
 * This function also prevents the default behavior of the hashchange event (scrolling to the element with the same id as the hash).
 * @param hash A string representing the new hash or null to remove the hash.
 */
function setUrlHash(hash: Hash): void {
  if (typeof window === 'undefined') return;
  window.addEventListener('hashchange', handleHashChange);

  if (!hash) updateUrl('');
  if (hash) updateUrl(hash);

  window.removeEventListener('hashchange', handleHashChange);
}

/**
 * Updates the URL hash parameter without causing a page reload.
 * This function keeps the current URL state and only updates the hash.
 * @param hash A string representing the new hash.
 */
function updateUrl(hash: string): void {
  if (typeof window === 'undefined') return;
  const currentState = window.history.state || {};
  currentState.hash = hash;
  const url = new URL(window.location.toString());
  url.hash = hash;
  window.history.pushState({ ...currentState }, '', url);
}

/**
 * Prevents the default behavior of the hashchange event
 * This is necessary to prevent the URL hash change from triggering a scroll event on the browser towards the element with the same id as the hash
 * @param event The hashchange event
 */
function handleHashChange(event: HashChangeEvent) {
  event.preventDefault();
}

/**
 * Hook to persist state variables in the URL hash
 * @returns A tuple with the current hash and a function to update it.
 */
export default function useHash(): [Hash, Dispatch<SetStateAction<Hash>>] {
  const [hash, setHash] = useState<Hash>(null);
  const hasPageLoaded = useRef<boolean>(false);
  const isHandlingPopState = useRef<boolean>(false);
  /**
   * This effect tracks url hash changes and
   * updates the url hash whenever there is a change in the hash state
   */
  useEffect(() => {
    const handlePopState = () => {
      isHandlingPopState.current = true;
      setHash(getUrlHash());
    };
    window.addEventListener('popstate', handlePopState);

    /**
     * Set the hash state to the current URL hash when the page first loads
     * This is necessary because the hash is not available during SSR
     * We then set the hasPageLoaded ref to true to prevent further updates
     */
    if (!hasPageLoaded.current && !isHandlingPopState.current) {
      setHash(getUrlHash());
      hasPageLoaded.current = true;
    }

    /**
     * Update the URL hash whenever the hash state changes
     */
    if (hasPageLoaded.current && !isHandlingPopState.current) setUrlHash(hash);

    isHandlingPopState.current = false;
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [hash]);

  return [hash, setHash];
}
