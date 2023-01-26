import { create } from 'zustand';

export const useStore = create<{
  name: string;
  price: number;
  image: string;
}>((set) => ({
  name: ``,
  price: 0,
  image: ``,
}));
