import React from 'react';
import { useCard } from '@/hooks/useCard';
import Image from 'next/image';
import { useStore } from '@/hooks/store';
import Options from './Options';

async function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  await useCard();
  const { name, image, price } = useStore.getState();
  return (
    <div>
      <Image src={image} width={400} height={500} alt={name} />
      <Options price={price} />
    </div>
  );
}

export default page;
