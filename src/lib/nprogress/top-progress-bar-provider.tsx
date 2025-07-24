'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';

export const TopProgressBarProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppProgressBar height="3px" color="#a5a5f1" options={{ showSpinner: false }} shallowRouting />
      {children}
    </>
  );
};
