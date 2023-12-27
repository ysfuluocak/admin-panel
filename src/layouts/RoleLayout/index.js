import React from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Table, Button, Space, Row, Col, Tag } from "antd";
import RoleLayoutModal from "./modal";

const RoleLayout = ({
  list,
  onClickAdd,
  onClickDelete,
  onClickEdit,
  isModalOpen,
  setIsModalOpen,
  onFinish,
  editRole,
  permissions,
}) => {
  //buraya bak
  const dataSource = list.map((item) => {
    return item.permissions.map((itemPer) => permissions.includes(itemPer.id));
  });
  console.log(dataSource);
  const columns = [
    {
      title: "Name",
      dataIndex: "roleName",
      key: "roleName",
      align: "left", // Sola yaslı
    },
    {
      title: "Permission",
      dataIndex: "permissions",
      key: "permissions",
      align: "left", // Sola yaslı
      render: (permissions) => (
        <div>
          {permissions.map((permission) => (
            <Tag key={permission.id}>{permission.permissionName}</Tag>
          ))}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "right", // Sağa yaslı
      render: (text, record) => (
        <Space>
          <Button
            type="primary"
            shape="circle"
            onClick={() => onClickEdit(record)}
            icon={<EditOutlined />}
          />
          <Button
            type="primary"
            shape="circle"
            onClick={() => onClickDelete(record.key)}
            icon={<DeleteOutlined />}
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
      <Table columns={columns} dataSource={dataSource} />
      {isModalOpen && (
        <RoleLayoutModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onFinish={onFinish}
          editRole={editRole}
          permissions={permissions}
        />
      )}
    </div>
  );
};

export default RoleLayout;
