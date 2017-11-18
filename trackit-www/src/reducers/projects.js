import {
  PROJECT_ADD,
  PROJECT_REMOVE,
  PROJECT_EDIT,
  PROJECTS_SET
} from "../actions/projects";

const clientsDefault = [];

export default (state = clientsDefault, action) => {
  switch (action.type) {
    case PROJECT_ADD:
      return [...state, action.payload];
    case PROJECT_REMOVE:
      return state.filter(({ id }) => id !== action.id);
    case PROJECT_EDIT:
      return state.map(item => {
        return item.id === action.id
          ? { ...item, ...action.payload, id: item.id }
          : item;
      });
    case PROJECTS_SET:
      return action.payload;
    default:
      return state;
  }
};
