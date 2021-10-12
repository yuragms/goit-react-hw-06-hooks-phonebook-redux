import {ADD, DELETE, TOGGLE_COMPLETED, CHANGE_FILTER} from './phonebook-types';
import { v4 as uuidv4 } from "uuid";

const addContacts =(name, number) => ({
    type: ADD,
    payload: {
    id: uuidv4(),
    name,
    number,
    },
});

сonst delContact = contactId => ({
    type: DELETE,
    payload: contactId,
});

export  { addContacts, delContact};