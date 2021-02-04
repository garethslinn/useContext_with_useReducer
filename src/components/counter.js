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
        <div className="count"><span data-testid="count">{ count } </span>item(s)</div>
    </React.Fragment>
  );
}

export default Counter;