import { TASK_ADD, TASK_REMOVE, TASK_EDIT, TASKS_SET } from "../actions/tasks";

const clientsDefault = [];

export default (state = clientsDefault, action) => {
  switch (action.type) {
    case TASK_ADD:
      return [...state, action.payload];
    case TASK_REMOVE:
      return state.filter(({ id }) => id !== action.id);
    case TASK_EDIT:
      return state.map(item => {
        return item.id === action.id
          ? { ...item, ...action.payload, id: item.id }
          : item;
      });
    case TASKS_SET:
      return action.payload;
    default:
      return state;
  }
};
