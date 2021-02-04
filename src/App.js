import React, { useReducer } from 'react';
import './styles/App.css';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import Counter from './components/counter';
import Context from './context';
import NameReducer from './reducers/itemReducer';
import useCombinedReducers from 'use-combined-reducers';
import UserReducer from './reducers/userReducer';
import { ContextDevTool } from 'react-context-devtool';

import { TITLE } from './constants/global';

function App() {

  const initialItem = {
      people: [{
        id: '12345',
        name: 'testing'
      }]
  }

  const [state, dispatch] = useCombinedReducers({
    members: useReducer(NameReducer, initialItem),
    global: useReducer(UserReducer, {}),
  });

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div data-testid="itemContainer" className="item-container">
          <h2 data-testid="title" className="title">{ TITLE }</h2>
          <Counter />
          <ItemList />
          <AddItem />
      </div>
      <ContextDevTool context={Context} id="uniqContextId" displayName="Context Display Name" />
    </Context.Provider>
  );
}

export default App;
