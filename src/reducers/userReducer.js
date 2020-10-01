const UserReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':

        const user = {
            user: action.payload
        }

        return {
            ...state,
            user
        }

        default:
            return state;
    }
}

export default UserReducer;

