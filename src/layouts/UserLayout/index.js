import React from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Table, Button, Space, Row, Col, Tag } from "antd";
import UserLayoutModal from "../UserLayout/modal";

const UserLayout = ({
  onCancel,
  isModalOpen,
  setIsModalOpen,
  onClickAdd,
  onClickDelete,
  onClickEdit,
  editUser,
  onFinish,
  list,
  roles,
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "userName",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
      align: "left",
      render: (cell, row) => {
        console.log("cell", cell);

        return (
          <div>
            {cell.map((role) => (
              <Tag key={role.id}>{role.roleName}</Tag>
            ))}
          </div>
        );
      },
    },
    {
      title: "Flows",
      dataIndex: "flows",
      key: "flows",
      align: "left",
      render: (cell, row) => {
        console.log("cell", cell);

        return (
          <div>
            {cell.map((flow) => (
              <Tag key={flow.id}>{flow.roleName}</Tag>
            ))}
          </div>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
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
      <Table columns={columns} dataSource={list} />
      {isModalOpen && (
        <UserLayoutModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onFinish={onFinish}
          editUser={editUser}
          onCancel={onCancel}
          roles={roles}
        />
      )}
    </div>
  );
};

export default UserLayout;
