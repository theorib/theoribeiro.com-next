import { useCallback } from 'react';
import { create } from 'zustand';

type Position = { x: number; y: number };

interface ExpandingGalleryState {
  previousScrollPosition: Position;
}

export default function useExpandingGalleryStore() {
  const useStore = create<ExpandingGalleryState>()(set => ({
    previousScrollPosition: { x: 0, y: 0 },
  }));

  const setPreviousScrollPosition = useCallback(({ x, y }: Position) => {
    useStore.setState({ previousScrollPosition: { x, y } });
  }, []);

  return { useStore, setPreviousScrollPosition };
}

// const useStore = create<ExpandingGalleryState>()(set => ({
// previousItemHash: undefined,
// currentItemHash: undefined,
// previousItemSlug: undefined,
// currentItemSlug: undefined,
// previousScrollPosition: { x: 0, y: 0 },
// currentScrollPosition: { x: 0, y: 0 },
// setPreviousItemSlug: (slug: string) => set({ previousItemSlug: slug }),
// setCurrentItemSlug: (slug: string) => set({ currentItemSlug: slug }),
// setPreviousItemHash: (item: string) => set({ previousItemHash: item }),
// setCurrentItemHash: (item: string) => set({ currentItemHash: item }),
// setPreviousScrollPosition: (position: Position) =>
// set({ previousScrollPosition: position }),
// setCurrentScrollPosition: (position: Position) =>
//   set({ currentScrollPosition: position }),
// }));

// export const setPreviousScrollPosition = ({ x, y }: Position) =>
//   useStore.setState({ previousScrollPosition: { x, y } });

// export const setPreviousScrollPosition = useCallback(({ x, y }: Position) => {
//   useStore.setState({ previousScrollPosition: { x, y } });
// }, []);

// export default { useStore, setPreviousScrollPosition };
