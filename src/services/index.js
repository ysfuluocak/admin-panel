import axios from "axios";
import { permissionURL, roleURL, userURL } from "../constants/apiURL";

const getPermissions = async () => {
  const response = await axios.get(permissionURL);
  return response.data;
};

const addPermission = async (newPermission) => {
  const response = await axios.post(permissionURL, newPermission);
  return response.data;
};

const deletePermission = async (id) => {
  const response = await axios.delete(`${permissionURL}/${id}`);
  return response.data;
};

const updatePermission = async (id, updatedPermission) => {
  const response = await axios.put(`${permissionURL}/${id}`, updatedPermission);
  return response.data;
};

const addUser = async (newUser) => {
  const response = await axios.post(userURL, newUser);
  return response.data;
};

const getUsers = async () => {
  const response = await axios.get(userURL);
  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(`${userURL}/${id}`);
  return response.data;
};

const updateUser = async (id, updatedUser) => {
  const response = await axios.put(`${userURL}/${id}`, updatedUser);
  return response.data;
};

const addRole = async (newRole) => {
  const response = await axios.post(roleURL, newRole);
  return response.data;
};

const getRoles = async () => {
  const response = await axios.get(roleURL);
  return response.data;
};

const deleteRole = async (id) => {
  const response = await axios.delete(`${roleURL}/${id}`);
  return response.data;
};

const updateRole = async (id, updatedRole) => {
  const response = await axios.put(`${roleURL}/${id}`, updatedRole);
  return response.data;
};

export {
  addPermission,
  getPermissions,
  addUser,
  getUsers,
  deletePermission,
  deleteUser,
  updatePermission,
  updateUser,
  addRole,
  getRoles,
  deleteRole,
  updateRole,
};
