import { v4 as uuidv4 } from 'uuid';

const ItemReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const newName = {
                id: uuidv4(),
                name: action.payload
            }

            return {
                ...state,
                people: [...state.people, newName]     
            }
        case 'REMOVE_ITEM':
            const people = state.people;
            const remainingItems = people.filter(( item ) => {
                return item.id !== action.payload;
            });

            return {
                ...state,
                people: [...remainingItems]     
            }

        default:
            return state;
    }
}

export default ItemReducer;

