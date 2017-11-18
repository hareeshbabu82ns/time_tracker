import databaseRef from "../firebase/firebase";

export const CLIENT_ADD = "CLIENT_ADD";
export const CLIENT_REMOVE = "CLIENT_REMOVE";
export const CLIENT_EDIT = "CLIENT_EDIT";
export const CLIENTS_SET = "CLIENTS_SET";

export const addClient = (payload = {}) => ({
  type: CLIENT_ADD,
  payload
});

export const removeClient = (id = "") => ({
  type: CLIENT_REMOVE,
  id
});

export const editClient = (id, payload) => ({
  type: CLIENT_EDIT,
  id,
  payload
});

export const setClients = (payload = []) => ({
  type: CLIENTS_SET,
  payload
});
