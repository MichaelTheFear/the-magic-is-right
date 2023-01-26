import React, { ReactNode } from 'react';
import '@/styles/globals.css';

function layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <header>The Magic is Right</header>
          {children}
        </main>
      </body>
    </html>
  );
}

export default layout;
