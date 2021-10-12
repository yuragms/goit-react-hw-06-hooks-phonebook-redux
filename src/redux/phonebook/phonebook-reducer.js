
import { combineReducers } from 'redux';
import { ADD, DELETE } from './phonebook-types';

// {
//     counter: {},
//     contacts: {
//         items: [],
//         filter: ''
//     }
// }

const items = (state =[], {type, payload}) => {
    switch(type) {
        case ADD:
            return [...state, payload];
        
        case DELETE:
            return state.filter(contact => contact.id !==payload);    
           

        default:
            return state;    

    }
}

const filter = (state = '', action) => {
    return state;
}

export default combineReducers({
    items,
    filter
})