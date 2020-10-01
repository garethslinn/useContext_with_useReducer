import React, { useContext } from 'react';
import  Context from '../context';

const ItemList = () => {
  const { state, dispatch } = useContext(Context);
  const { members, global } = state;
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }

    return (
      <ul>
        {members.people.map((item) => {
          return (
                  <li data-testid="listItem" key={item.id} className="item item-wrapper">{item.name}
                      <button 
                        data-testid="removeButton"
                        className="button remove" 
                        onClick={() => removeItem(item.id)}>
                      </button>
                  </li>
                );
        })}
      </ul>
    );
}

export default ItemList;
