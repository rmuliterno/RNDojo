import React from 'react';
import {AuthProvider} from './AuthProvider';

interface Props {
  children: JSX.Element;
}

const StoreProvider = ({children}: Props) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export {StoreProvider};
