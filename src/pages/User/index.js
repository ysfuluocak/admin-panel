import React, { useEffect, useReducer, useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import {
  addUser,
  deleteUser,
  getFlows,
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
  const [flows, setFlows] = useState([]);

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
            flows: response.flows.map((itemFlowId) =>
              flows.find((flow) => flow.id === itemFlowId)
            ),
            key: response.id,
          },
        });
      });
    } else {
      updateUser(editUser.id, values).then((response) => {
        dispatch({
          type: UPDATE_ITEM,
          payload: {
            ...response,
            roles: response.roles.map((itemRoleId) =>
              roles.find((role) => role.id === itemRoleId)
            ),
            flows: response.flows.map((itemFlowId) =>
              flows.find((flow) => flow.id === itemFlowId)
            ),
            key: response.id,
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
        getFlows().then((flowsResponse) => {
          dispatch(
            response
              .map((item) => ({
                ...item,
                roles: item.roles.map((itemRoleId) =>
                  responseRole.find((role) => role.id === itemRoleId)
                ),
                flows: item.flows.map((itemFlowsId) =>
                  flowsResponse.find((flow) => flow.id === itemFlowsId)
                ),
              }))
              .map((item) => ({ ...item, key: item.id }))
          );
          setFlows(flowsResponse);
        });
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
      editUser={editUser}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      onCancel={onCancel}
      roles={roles}
      flows={flows}
    />
  );
};

export default User;
