const baseURL = "http://localhost:5000";
const userURL = `${baseURL}/users`;
const roleURL = `${baseURL}/roles`;
const permissionURL = `${baseURL}/permissions`;
const taskURL = `${baseURL}/tasks`;
const flowURL = `${baseURL}/flows`;
const currentUserURL = `${baseURL}/${"currentUser"}`;

export {
  baseURL,
  userURL,
  roleURL,
  permissionURL,
  taskURL,
  flowURL,
  currentUserURL,
};
