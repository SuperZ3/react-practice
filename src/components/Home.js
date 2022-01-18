import React, { useState } from 'react';

const Home = () => {
  const [state, setState] = useState(0);
  const handleClick = () => {
    setState(state + 1);
  }
  return (
    <div onClick={handleClick}>{state}alsfd</div>
  )
}

export default Home
