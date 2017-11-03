import {
  CLIENT_ADD,
  CLIENT_REMOVE,
  CLIENT_EDIT,
  CLIENTS_SET
} from "../actions/clients";

const clientsDefault = [];

export default (state = clientsDefault, action) => {
  switch (action.type) {
    case CLIENT_ADD:
      return [...state, action.payload];
    case CLIENT_REMOVE:
      return state.filter(({ id }) => id !== action.id);
    case CLIENT_EDIT:
      return state.map(item => {
        return item.id === action.id
          ? { ...item, ...action.payload, id: item.id }
          : item;
      });
    case CLIENTS_SET:
      return action.payload;
    default:
      return state;
  }
};
