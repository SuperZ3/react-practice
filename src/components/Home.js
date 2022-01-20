import React, { useContext } from 'react';
import moment from 'moment';
import { MyContext } from '../context';

const Home = () => {
  const store = useContext(MyContext)
  const handleClick = () => store.dispatch({
      type: 'add'
    })
  return (
    <div onClick={handleClick}>dsf {store.getState()} times
      <p>{moment.unix(1485532800).format('M月D日公布')}</p>
    </div>
  )
}

export default Home
