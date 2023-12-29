import React from "react";
import FlowLayoutForm from "./form";
import { Modal } from "antd";

const FlowLayoutModal = ({
  isModalOpen,
  setIsModalOpen,
  onFinish,
  editFlow,
  tasks,
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
      title="Add Flow"
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <FlowLayoutForm onFinish={onFinish} editFlow={editFlow} tasks={tasks} />
    </Modal>
  );
};
export default FlowLayoutModal;
