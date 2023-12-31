import axios from "axios";
import {
  currentUserURL,
  flowURL,
  permissionURL,
  roleURL,
  taskURL,
  userURL,
} from "../constants/apiURL";

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

const addTask = async (newTask) => {
  const response = await axios.post(taskURL, newTask);
  return response.data;
};

const getTasks = async () => {
  const response = await axios.get(taskURL);
  return response.data;
};

const deleteTask = async (id) => {
  const response = await axios.delete(`${taskURL}/${id}`);
  return response.data;
};

const updateTask = async (id, updatedTask) => {
  const response = await axios.put(`${taskURL}/${id}`, updatedTask);
  return response.data;
};

const addFlow = async (newFlow) => {
  const response = await axios.post(flowURL, newFlow);
  return response.data;
};

const getFlows = async () => {
  const response = await axios.get(flowURL);
  return response.data;
};

const deleteFlow = async (id) => {
  const response = await axios.delete(`${flowURL}/${id}`);
  return response.data;
};

const updateFlow = async (id, updatedFlow) => {
  const response = await axios.put(`${flowURL}/${id}`, updatedFlow);
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

const getCurrentUser = async () => {
  const response = await axios.get(currentUserURL);
  return response.data;
};

const updateCurrentUser = async (user) => {
  const response = await axios.put(`${currentUserURL}`, user);
  return response.data;
};

const userPer = async (user) => {
  console.log(user);
  const permissions = await getPermissions();

  const roles = await getRoles();

  const userRoles = user?.roles
    ?.map((roleId) => roles?.filter((role) => role.id === roleId))
    .flat(1);

  const userPermissions = userRoles
    ?.map((role) => {
      console.log(role.permissions);
      return role.permissions?.map((permissionId) => {
        return permissions?.filter((per) => per.id === permissionId);
      });
    })
    .flat(Infinity);

  return [...new Set(userPermissions)].map(per=>per.permissionName);
};

export {
  userPer,
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
  getFlows,
  getTasks,
  addFlow,
  addTask,
  deleteFlow,
  deleteTask,
  updateFlow,
  updateTask,
  getCurrentUser,
  updateCurrentUser,
};
