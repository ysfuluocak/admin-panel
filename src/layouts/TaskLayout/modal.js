import React from "react";
import { Modal } from "antd";
import TaskLayoutForm from "./form";

const TaskLayoutModal = ({
  onFinish,
  isModalOpen,
  editTask,
  setIsModalOpen,
  onCancel,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    if (onCancel) onCancel();
  };

  return (
    <Modal
      title="Add Permission"
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <TaskLayoutForm onFinish={onFinish} editTask={editTask} />
    </Modal>
  );
};

export default TaskLayoutModal;
