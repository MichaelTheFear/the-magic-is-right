import { useStore } from '@/hooks/store';

export const useCard = async () => {
  const data = await fetch(`https://api.scryfall.com/cards/random`);
  const card = await data.json();
  useStore.setState({
    name: card.name,
    image: card.image_uris.png,
    price: card.prices.usd,
  });
};
