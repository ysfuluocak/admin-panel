import React, { useEffect, useReducer, useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import {
  addUser,
  deleteUser,
  getRoles,
  getUsers,
  updateUser,
} from "../../services";
import reducer, {
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
} from "../../reducers/listReducer";

const User = () => {
  const [editUser, setEditUser] = useState();
  const [list, dispatch] = useReducer(reducer, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roles, setRoles] = useState([]);

  const onFinish = (values) => {
    if (!editUser) {
      addUser(values).then((response) => {
        dispatch({
          type: ADD_ITEM,
          payload: {
            ...response,
            roles: response.roles.map((itemRoleId) =>
              roles.find((role) => role.id === itemRoleId)
            ),
          },
        });
      });
    } else {
      updateUser(editUser.id, ...values).then((response) => {
        dispatch({
          type: UPDATE_ITEM,
          payload: {
            ...response,
            roles: response.roles.map((itemRoleId) =>
              roles.find((role) => role.id === itemRoleId)
            ),
          },
        });
      });
      setEditUser();
    }
    setIsModalOpen(false);
  };

  const onClickAdd = () => {
    setIsModalOpen(true);
  };

  const onClickDelete = (id) => {
    deleteUser(id).then((response) => {
      dispatch({ type: DELETE_ITEM, payload: id });
    });
  };

  const onClickEdit = (editedUser) => {
    setIsModalOpen(true);
    setEditUser(editedUser);
  };

  const onCancel = () => {
    setIsModalOpen(false);
    setEditUser();
  };

  useEffect(() => {
    getUsers().then((response) => {
      getRoles().then((responseRole) => {
        dispatch(
          response
            .map((item) => ({
              ...item,
              roles: item.roles.map((itemRoleId) =>
                responseRole.find((role) => role.id === itemRoleId)
              ),
            }))
            .map((item) => ({ ...item, key: item.id }))
        );
        setRoles(responseRole);
      });
    });
  }, []);

  return (
    <UserLayout
      onFinish={onFinish}
      onClickAdd={onClickAdd}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      list={list}
      editRole={editUser}
      setEditRole={setEditUser}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      onCancel={onCancel}
      roles={roles}
    />
  );
};

export default User;
