import React, { useEffect, useReducer, useState } from "react";
import TaskLayout from "../../layouts/TaskLayout";
import {
  addTask,
  deleteRole,
  getFlows,
  getTasks,
  updateTask,
} from "../../services";
import reducer, {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../../reducers/listReducer";

const Task = () => {
  const [editTask, setEditTask] = useState();
  const [list, dispatch] = useReducer(reducer, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flows, setFlows] = useState();

  const onFinish = (values) => {
    if (!editTask) {
      addTask(values).then((response) => {
        dispatch({
          type: ADD_ITEM,
          payload: {
            ...response,
            flows: response.flows.map((itemFlowId) =>
              flows.find((flow) => flow.id === itemFlowId)
            ),
            key: response.id,
          },
        });
      });
    } else {
      updateTask(editTask.id, {
        ...values,
        flows: values.flows.map((flow) => flow.value),
      }).then((response) => {
        dispatch({
          type: UPDATE_ITEM,
          payload: {
            ...response,
            flows: response.flows.map((itemFlowId) =>
              flows.find((flow) => flow.id === itemFlowId)
            ),
            key: response.id,
          },
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
    deleteRole(id).then((response) => {
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
      getFlows().then((responseFlow) => {
        dispatch(
          response
            .map((item) => ({
              ...item,
              flows: item.flows.map((itemFlowId) =>
                flows.find((flow) => flow.id === itemFlowId)
              ),
            }))
            .map((item) => ({ ...item, key: item.id }))
        );
        setFlows(responseFlow);
      });
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
      flows={flows}
      onCancel={onCancel}
    />
  );
};

export default Task;
