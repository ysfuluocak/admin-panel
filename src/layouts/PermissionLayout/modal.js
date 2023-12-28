import React from "react";
import { Modal, Form } from "antd";
import PermissionLayoutForm from "./form";

const PermissionLayoutModal = ({
  isModalOpen,
  setIsModalOpen,
  onFinish,
  editedPermission,
  onCancel,
}) => {
  const [form] = Form.useForm();
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
      <PermissionLayoutForm
        onFinish={onFinish}
        editedPermission={editedPermission}
        form={form}
      />
    </Modal>
  );
};
export default PermissionLayoutModal;
