import { create } from 'zustand';

const useStore = create(set => ({
  previousItem: undefined,
  currentItem: undefined,
  previousScrollPosition: { x: 0, y: 0 },

  setPreviousItem: (item: string) => set({ previousItem: item }),
  setCurrentItem: (item: string) => set({ currentItem: item }),
  setPreviousScrollPosition: (position: number) =>
    set({ previousScrollPosition: position }),
}));
