import React from 'react';
import {AuthProvider, IContextProp} from './Auth';

export const Providers = ({children}: IContextProp) => {
  return <AuthProvider>{children}</AuthProvider>;
};
