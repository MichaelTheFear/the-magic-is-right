import React from 'react';
import style from '@/styles/Home.module.css';
import PlayButton from '@/app/PlayButton';

function page({ children }: { children?: React.ReactNode }) {
  return (
    <div className={style.centered}>
      <div>{children || <PlayButton />}</div>
    </div>
  );
}

export default page;
