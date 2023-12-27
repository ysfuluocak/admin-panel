import React, { useEffect, useReducer, useState } from "react";
import PermissionLayout from "../../layouts/PermissionLayout";
import reducer, { DELETE_ITEM, UPDATE_ITEM } from "../../reducers/listReducer";
import { ADD_ITEM } from "../../reducers/listReducer";
import {
  addPermission,
  deletePermission,
  getPermissions,
  updatePermission,
} from "../../services";

const Permission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, dispatch] = useReducer(reducer, []);
  const [editPermission, setEditPermission] = useState();

  const onFinish = (values) => {
    if (!editPermission) {
      addPermission(values).then((response) => {
        dispatch({ type: ADD_ITEM, payload: response });
      });
    } else {
      updatePermission(editPermission.id, values).then((response) => {
        dispatch({type:UPDATE_ITEM,payload:response});
      });
    }
    setIsModalOpen(false);
  };

  const onClickAdd = () => {
    setIsModalOpen(true);
  };

  const onClickDelete = (id) => {
    deletePermission(id).then((response) =>
      dispatch({ type: DELETE_ITEM, payload: id })
    );
  };

  const onClickEdit = (updatedPermission) => {
    setIsModalOpen(true);
    setEditPermission(updatedPermission);
  };

  useEffect(() => {
    getPermissions().then((response) => {
      dispatch(response.map((item) => ({ ...item, key: item.id })));
    });
  }, []);

  return (
    <PermissionLayout
      list={list}
      onFinish={onFinish}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickAdd={onClickAdd}
      editedPermission={editPermission}
    />
  );
};

export default Permission;
