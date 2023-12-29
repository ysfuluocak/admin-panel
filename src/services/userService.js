// import axios from "axios";
// import { userURL,currentUserURL } from "../constants/apiURL";

// const addUser = async (newUser) => {
//   const response = await axios.post(userURL, newUser);
//   return response.data;
// };

// const getUsers = async () => {
//   const response = await axios.get(userURL);
//   return response.data;
// };

// const deleteUser = async (id) => {
//   const response = await axios.delete(`${userURL}/${id}`);
//   return response.data;
// };

// const updateUser = async (id, updatedUser) => {
//   const response = await axios.put(`${userURL}/${id}`, updatedUser);
//   return response.data;
// };

// const getCurrentUser = async () => {
//   const response = await axios.get(currentUserURL);
//   return response.data;
// };

// const updateCurrentUser = async (user) => {
//   const response = await axios.put(`${currentUserURL}`, user);
//   return response.data;
// };

// const userPer = async (user) => {
//   console.log(user);
//   const permissions = await getPermissions();

//   const roles = await getRoles();

//   const userRoles = user?.roles
//     ?.map((roleId) => roles?.filter((role) => role.id === roleId))
//     .flat(1);

//   const userPermissions = userRoles
//     ?.map((role) => {
//       console.log(role.permissions);
//       return role.permissions?.map((permissionId) => {
//         return permissions?.filter((per) => per.id === permissionId);
//       });
//     })
//     .flat(Infinity);

//   return [...new Set(userPermissions)].map((per) => per.permissionName);
// };

// export {
//   addUser,
//   getUsers,
//   deleteUser,
//   updateUser,
//   userPer,
//   updateCurrentUser,
//   getCurrentUser,
// };
