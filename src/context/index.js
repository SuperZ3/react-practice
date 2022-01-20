import React, { createContext } from 'react';
import store from '../stores';

export const MyContext = createContext({})

const Supply = ({children, count}) => {
  return (
    <MyContext.Provider value={store}>
      {children}
    </MyContext.Provider>
  )
}

export default Supply
