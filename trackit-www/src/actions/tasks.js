import databaseRef from "../firebase/firebase";

export const TASK_ADD = "TASK_ADD";
export const TASK_REMOVE = "TASK_REMOVE";
export const TASK_EDIT = "TASK_EDIT";
export const TASKS_SET = "TASKS_SET";

export const addTask = (payload = {}) => ({
  type: TASK_ADD,
  payload
});

export const removeTask = (id = "") => ({
  type: TASK_REMOVE,
  id
});

export const editTask = (id, payload) => ({
  type: TASK_EDIT,
  id,
  payload
});

export const setTasks = (payload = []) => ({
  type: TASKS_SET,
  payload
});
