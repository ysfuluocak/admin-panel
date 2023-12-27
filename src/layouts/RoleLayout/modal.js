import React from "react";
import { Modal } from "antd";
import RoleLayoutForm from "./form";

const RoleLayoutModal = ({ onFinish, isModalOpen,editRole,setIsModalOpen,permissions }) => {
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
      <RoleLayoutForm onFinish={onFinish} editRole={editRole} permissions={permissions} />
    </Modal>
  );
};

export default RoleLayoutModal;
