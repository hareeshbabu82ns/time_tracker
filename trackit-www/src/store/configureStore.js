import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import clientsReducer from "../reducers/clients";
import projectsReducer from "../reducers/projects";
import tasksReducer from "../reducers/tasks";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      clients: clientsReducer,
      projects: projectsReducer,
      tasks: tasksReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
