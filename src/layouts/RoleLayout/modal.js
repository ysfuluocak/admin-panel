import React from "react";
import { Modal } from "antd";
import RoleLayoutForm from "./form";

const RoleLayoutModal = ({
  onFinish,
  isModalOpen,
  editRole,
  setIsModalOpen,
  permissions,
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
      <RoleLayoutForm
        onFinish={onFinish}
        editRole={editRole}
        permissions={permissions}
      />
    </Modal>
  );
};

export default RoleLayoutModal;
