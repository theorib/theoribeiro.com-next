'use client';
import { useLayoutEffect, useRef } from 'react';
import { useExpandingGridGallery } from '../contexts/ExpandingGridGalleryContext';
import { ScrollPosition } from '../ExpandingGridGallery.types';

/**
 * Retrieves the current scroll position of the window.
 * @returns The current scroll position as an object with `scrollX` and `scrollY` properties.
 */
function getCurrentScrollPosition(): ScrollPosition {
  if (typeof window === 'undefined') return { scrollX: 0, scrollY: 0 };
  return {
    scrollX: window.scrollX,
    scrollY: window.scrollY,
  };
}

/**
 * Scrolls the window to a specific position
 *
 * @param scrollPosition - The position to scroll to as an object with `scrollX` and `scrollY` properties.
 * @param behavior - The scroll behavior. Defaults to 'smooth'.
 * @returns A requestAnimationFrame ID.
 */
function scrollToPosition(
  scrollPosition: ScrollPosition,
  behavior: ScrollBehavior = 'smooth',
) {
  return window.requestAnimationFrame(() => {
    window.scroll({
      top: scrollPosition.scrollY,
      left: scrollPosition.scrollX,
      behavior: behavior,
    });
  });
}

/**
 * Scrolls the given element into view with optional timeout and scroll options.
 * @param element - The element to scroll into view.
 * @param timeout - The timeout before scrolling the element into view (default: 50ms).
 * @param options - The scroll options (default: { behavior: 'smooth', block: 'center', inline: 'center' }).
 * @returns A timeout identifier that can be used to cancel the scroll operation.
 */
function scrollElementIntoView(
  element: HTMLElement,
  timeout = 50,
  options: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  },
) {
  return setTimeout(() => {
    element.scrollIntoView({ ...options });
  }, timeout);
}

/**
 * A React component that manages the scroll position when an expanding gallery is used.
 * It retrieves the previous scroll position from the ExpandingGalleryContext, scrolls the window to that position, and then scrolls the expanded gallery element into view.
 * The component is designed to be used within the ExpandingGalleryContextProvider
 */

interface WithScrollToProps {
  animateFirstScroll?: boolean;
}

export default function WithScrollTo({
  animateFirstScroll: animateFirstScrollProp = false,
}: WithScrollToProps) {
  const { currentUniqueSlug, previousScrollPosition } =
    useExpandingGridGallery();
  const scrollPositionRef = useRef<ScrollPosition>({ scrollX: 0, scrollY: 0 });

  useLayoutEffect(() => {
    scrollPositionRef.current = previousScrollPosition;

    let animateFirstScroll: number;
    if (animateFirstScrollProp) {
      animateFirstScroll = scrollToPosition(scrollPositionRef.current);
    }

    const element = document.getElementById(`${currentUniqueSlug}-expanded`);
    if (!element) return; // guard clause
    const timeOut = scrollElementIntoView(element);
    scrollPositionRef.current = getCurrentScrollPosition();

    return () => {
      clearTimeout(timeOut);
      if (animateFirstScrollProp) {
        cancelAnimationFrame(animateFirstScroll);
      }
    };
  }, [currentUniqueSlug, previousScrollPosition, animateFirstScrollProp]);

  return null;
}
