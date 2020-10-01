import React, { useState, useContext, useRef, useEffect } from 'react';
import Context from '../context';

const AddItem = () => {
    const { state, dispatch } = useContext(Context);
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(true);
  
    let ref = useRef();
  
    useEffect(() => {
      ref.current.focus();
    });
  
    const handleChange = e => {
      setValue(e.target.value);
      setDisabled(false);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      if (value.trim() === '') {
        setDisabled(true)
      } else {
        dispatch({ type: 'ADD_ITEM', payload: value });
        setValue('');
      }
    };
  
    return (
      <div>
        <form className="item-add-container item-wrapper" onSubmit={handleSubmit}>
          <input 
          type='text' 
          ref={ref} 
          onChange={handleChange} 
          maxlength='30'
          value={value} />
          <button className="button add" disabled={disabled}></button>
        </form>
      </div>
    );
  }

  export default AddItem;