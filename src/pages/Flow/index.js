import React, { useState, useEffect, useReducer } from "react";
import reducer, {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../../reducers/listReducer";
import {
  addFlow,
  deleteFlow,
  getFlows,
  getTasks,
  updateFlow,
} from "../../services";
import FlowLayout from "../../layouts/FlowLayout";

const Flow = ({colorPrimary}) => {
  const [editFlow, setEditFlow] = useState();
  const [list, dispatch] = useReducer(reducer, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState();

  const onFinish = (values) => {
    if (!editFlow) {
      addFlow(values).then((response) => {
        dispatch({
          type: ADD_ITEM,
          payload: {
            ...response,
            tasks: response.tasks.map((itemTasksId) =>
              tasks.find((task) => task.id === itemTasksId)
            ),
            key: response.id,
          },
        });
      });
    } else {
      updateFlow(editFlow.id, values).then((response) => {
        dispatch({
          type: UPDATE_ITEM,
          payload: {
            ...response,
            tasks: response.tasks.map((itemTasksId) =>
              tasks.find((task) => task.id === itemTasksId)
            ),
            key: response.id,
          },
        });
        setEditFlow();
      });
    }
    setIsModalOpen(false);
  };

  const onClickAdd = () => {
    setIsModalOpen(true);
  };

  const onClickDelete = (id) => {
    deleteFlow(id).then((response) =>
      dispatch({ type: DELETE_ITEM, payload: id })
    );
  };

  const onClickEdit = (updatedFlow) => {
    setIsModalOpen(true);
    setEditFlow(updatedFlow);
  };

  const onCancel = () => {
    setIsModalOpen(false);
    setEditFlow();
  };

  useEffect(() => {
    getFlows().then((response) => {
      getTasks().then((taskResponse) => {
        dispatch(
          response
            .map((flow) => ({
              ...flow,
              tasks: flow.tasks.map((taskId) =>
                taskResponse.find((task) => task.id === taskId)
              ),
            }))
            .map((flow) => ({ ...flow, key: flow.id }))
        );
        setTasks(taskResponse);
      });
    });
  }, []);

  return (
    <FlowLayout
      list={list}
      onFinish={onFinish}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickAdd={onClickAdd}
      editFlow={editFlow}
      tasks={tasks}
      onCancel={onCancel}
      colorPrimary={colorPrimary}
    />
  );
};

export default Flow;
