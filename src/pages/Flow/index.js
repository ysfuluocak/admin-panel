import React, { useState, useEffect, useReducer } from "react";
import reducer, {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from "../../reducers/listReducer";
import { addFlow, deleteFlow, getFlows, updateFlow } from "../../services";
import FlowLayout from "../../layouts/FlowLayout";

const Flow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, dispatch] = useReducer(reducer, []);
  const [editFlow, setEditFlow] = useState();
  const [tasks, setTasks] = useState();

  const onFinish = (values) => {
    if (!editFlow) {
      addFlow(values).then((response) => {
        dispatch({
          type: ADD_ITEM,
          payload: { ...response, key: response.id },
        });
      });
    } else {
      updateFlow(editFlow.id, values).then((response) => {
        dispatch({
          type: UPDATE_ITEM,
          payload: { ...response, key: response.id },
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

  useEffect(() => {
    getFlows().then((response) => {
      dispatch(response.map((item) => ({ ...item, key: item.id })));
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
      setEditFlow={setEditFlow}
    />
  );
};

export default Flow;
