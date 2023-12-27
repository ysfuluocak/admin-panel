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
  const [permissions, setPermissions] = useState([]);

  const onFinish = (values) => {
    console.log(values);
    if (!editRole) {
      addRole(values).then((response) => {
        dispatch({ type: ADD_ITEM, payload: values });
      });
    } else {
      updateRole(editRole.id, values).then((response) => {
        dispatch({ type: UPDATE_ITEM, payload: values });
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
    setEditRole(editedRole);
  };

  useEffect(() => {
    getRoles().then((response) => {
      dispatch(response);
      getPermissions().then((response) => {
        getPermissions().then((response) => {
          setPermissions(response);
        });
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
    />
  );
};

export default Role;
