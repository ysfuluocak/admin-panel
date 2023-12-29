import React, { useEffect, useReducer, useState } from "react";
import TaskLayout from "../../layouts/TaskLayout";
import { addTask, deleteTask, getTasks, updateTask } from "../../services";
import reducer, {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../../reducers/listReducer";

const Task = ({colorPrimary}) => {
  const [editTask, setEditTask] = useState();
  const [list, dispatch] = useReducer(reducer, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values) => {
    if (!editTask) {
      addTask(values).then((response) => {
        dispatch({
          type: ADD_ITEM,
          payload: { ...response, key: response.id },
        });
      });
    } else {
      updateTask(editTask.id, values).then((response) => {
        dispatch({
          type: UPDATE_ITEM,
          payload: { ...response, key: response.id },
        });
        setEditTask();
      });
    }
    setIsModalOpen(false);
  };

  const onClickAdd = () => {
    setIsModalOpen(true);
  };

  const onClickDelete = (id) => {
    deleteTask(id).then((response) => {
      dispatch({ type: DELETE_ITEM, payload: id });
    });
  };

  const onClickEdit = (editTask) => {
    setIsModalOpen(true);
    setEditTask(editTask);
  };

  const onCancel = () => {
    setIsModalOpen(false);
    setEditTask();
  };

  useEffect(() => {
    getTasks().then((response) => {
      dispatch(response.map((item) => ({ ...item, key: item.id })));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <TaskLayout
      onFinish={onFinish}
      onClickAdd={onClickAdd}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      list={list}
      editTask={editTask}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      onCancel={onCancel}
      setEditTask={setEditTask}
      colorPrimary={colorPrimary}
    />
  );
};

export default Task;
