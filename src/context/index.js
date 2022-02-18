import React, { createContext, useEffect, useRef, useState } from 'react';
import store from '../stores';

export const MyContext = createContext({})

const Supply = ({children}) => {
  const [state, setState] = useState(0)
  const stay = useRef({
    a: state,
    handleChange: (num) => {
      setState(num)
    }
  })

  return (
    <MyContext.Provider value={stay.current}>
      {children}
    </MyContext.Provider>
  )
}

export default Supply
