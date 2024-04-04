import { create } from 'zustand';

type Position = { x: number; y: number };

interface ExpandingGalleryState {
  previousScrollPosition: Position;
}

export default function useExpandingGalleryStore() {
  const useStore = create<ExpandingGalleryState>()(() => ({
    previousScrollPosition: { x: 0, y: 0 },
  }));

  const setPreviousScrollPosition = ({ x, y }: Position) =>
    useStore.setState({ previousScrollPosition: { x, y } });

  const store = useStore();

  return { store, setPreviousScrollPosition };
}
