import databaseRef from "../firebase/firebase";

export const PROJECT_ADD = "PROJECT_ADD";
export const PROJECT_REMOVE = "PROJECT_REMOVE";
export const PROJECT_EDIT = "PROJECT_EDIT";
export const PROJECTS_SET = "PROJECTS_SET";

export const addProject = (payload = {}) => ({
  type: PROJECT_ADD,
  payload
});

export const removeProject = (id = "") => ({
  type: PROJECT_REMOVE,
  id
});

export const editProject = (id, payload) => ({
  type: PROJECT_EDIT,
  id,
  payload
});

export const setProjects = (payload = []) => ({
  type: PROJECTS_SET,
  payload
});
