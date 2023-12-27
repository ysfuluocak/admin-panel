import React from "react";
import { Modal } from "antd";
import PermissionLayoutForm from "./form";

const PermissionLayoutModal = ({ isModalOpen, setIsModalOpen, onFinish,editedPermission }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
      <PermissionLayoutForm onFinish={onFinish} editedPermission={editedPermission} />
    </Modal>
  );
};
export default PermissionLayoutModal;
