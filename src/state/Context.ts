import React, { useContext, createContext } from 'react';

import { IContext } from './interfaces';
import initialState from './State';

const GlobalContext = createContext<IContext>({ state: initialState, dispatch: () => {} });

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;
