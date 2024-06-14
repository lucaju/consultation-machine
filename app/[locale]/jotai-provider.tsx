'use client';

import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';

export const JotaiProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <Provider>
      {children} <DevTools theme="dark" />
    </Provider>
  );
};
