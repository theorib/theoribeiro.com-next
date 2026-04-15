'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { z } from 'zod';

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
 * @param hash - A string representing the new hash or null to remove the hash.
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
 * @param hash - A string representing the new hash.
 */
function updateUrl(hash: string): void {
  if (typeof window === 'undefined') return;

  const currentState = z
    .object({ hash: z.string().optional() })
    .default({})
    .parse(window.history.state ?? {});

  currentState.hash = hash;
  const url = new URL(window.location.toString());
  url.hash = hash;
  window.history.pushState({ ...currentState }, '', url);
}

/**
 * Prevents the default behavior of the hashchange event
 * This is necessary to prevent the URL hash change from triggering a scroll event on the browser towards the element with the same id as the hash
 * @param event - The hashchange event
 */
function handleHashChange(event: HashChangeEvent) {
  event.preventDefault();
}

/**
 * Hook to persist state variables in the URL hash
 * @returns A tuple with the current hash and a function to update it.
 */
export default function useHash(): [Hash, Dispatch<SetStateAction<Hash>>] {
  const [hash, setHash] = useState<Hash>(() => getUrlHash());
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
     * Mark the page as loaded on the first effect run.
     * Initial hash is already set via the useState lazy initializer.
     */
    if (!hasPageLoaded.current && !isHandlingPopState.current) {
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
