'use client';

import { rootStore } from '@/jotai/store';
import { Provider } from 'jotai';
// import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';

export const JotaiProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <Provider store={rootStore}>
      {children}
      {/* <DevTools theme="dark" /> */}
    </Provider>
  );
};
