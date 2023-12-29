import { Modal } from "antd";
import React from "react";
import UserLayoutForm from "./form";

const UserLayoutModal = ({
  onFinish,
  isModalOpen,
  editUser,
  setIsModalOpen,
  onCancel,
  roles,
  flows,
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
      title="Add User"
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <UserLayoutForm
        onFinish={onFinish}
        editUser={editUser}
        roles={roles}
        flows={flows}
      />
    </Modal>
  );
};

export default UserLayoutModal;
