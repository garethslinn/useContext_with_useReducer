import React, { useState, useContext, useEffect } from 'react';
import  Context from '../context';

const Counter = () => {
  const { state } = useContext(Context);
  const total = state.members.people.length;
  const [count, setCount] = useState(total);

  useEffect(() => {
    setCount(total)
  },[total]);

  return (
    <React.Fragment>
        <div data-testid="count" className="count">{ count } item(s)</div>
    </React.Fragment>
  );
}

export default Counter;