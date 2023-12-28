import React, { useEffect, useReducer, useState } from "react";
import RoleLayout from "../../layouts/RoleLayout";
import {
  addRole,
  deleteRole,
  getPermissions,
  getRoles,
  updateRole,
} from "../../services";
import reducer, {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../../reducers/listReducer";

const Role = () => {
  const [editRole, setEditRole] = useState();
  const [list, dispatch] = useReducer(reducer, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [permissions, setPermissions] = useState();

  const onFinish = (values) => {
    if (!editRole) {
      addRole(values).then((response) => {
        dispatch({
          type: ADD_ITEM,
          payload: {
            ...response,
            permissions: response.permissions.map((itemPer) =>
              permissions.find((per) => per.id === itemPer)
            ),
            key: response.id,
          },
        });
        console.log(list);
        debugger;
      });
    } else {
      updateRole(editRole.id, {
        ...values,
        permissions: values.permissions.map((per) => per.value),
      }).then((response) => {
        dispatch({
          type: UPDATE_ITEM,
          payload: {
            ...response,
            permissions: response.permissions.map((itemPer) =>
              permissions.find((per) => per.id === itemPer)
            ),
            key: response.id,
          },
        });
        setEditRole();
      });
    }
    setIsModalOpen(false);
  };

  const onClickAdd = () => {
    setIsModalOpen(true);
  };

  const onClickDelete = (id) => {
    deleteRole(id).then((response) => {
      dispatch({ type: DELETE_ITEM, payload: id });
    });
  };

  const onClickEdit = (editedRole) => {
    setIsModalOpen(true);
    console.log(editedRole);
    debugger;
    setEditRole(editedRole);
  };

  const onCancel = () => {
    setIsModalOpen(false);
    setEditRole();
  };

  useEffect(() => {
    getRoles().then((response) => {
      getPermissions().then((responsePer) => {
        dispatch(
          response
            .map((item) => ({
              ...item,
              permissions: item.permissions.map((itemPer) =>
                responsePer.find((per) => per.id === itemPer)
              ),
            }))
            .map((item) => ({ ...item, key: item.id }))
        );
        setPermissions(responsePer);
      });
    });
  }, []);

  return (
    <RoleLayout
      onFinish={onFinish}
      onClickAdd={onClickAdd}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      list={list}
      editRole={editRole}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      permissions={permissions}
      onCancel={onCancel}
    />
  );
};

export default Role;
