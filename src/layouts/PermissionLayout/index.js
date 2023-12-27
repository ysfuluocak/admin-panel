import React from "react";
import { Table, Space, Button, Col, Row } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import PermissionLayoutModal from "./modal";

const PermissionLayout = ({
  list,
  onFinish,
  isModalOpen,
  setIsModalOpen,
  onClickDelete,
  onClickEdit,
  onClickAdd,
  editedPermission
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "permissionName",
      key: "key",
      align: "left",
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      render: (text, record) => (
        <Space>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => onClickEdit(record)}
          />

          <Button
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => onClickDelete(record.key)}
            danger
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Row justify="end">
        <Col>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={onClickAdd}
          />
        </Col>
      </Row>
      <Table columns={columns} dataSource={list} />
      {isModalOpen && (
        <PermissionLayoutModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onFinish={onFinish}
          editedPermission={editedPermission}
        />
      )}
    </div>
  );
};

export default PermissionLayout;
