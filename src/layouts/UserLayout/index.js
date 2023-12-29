import React, { useContext } from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Table, Button, Space, Row, Col, Tag } from "antd";
import UserLayoutModal from "../UserLayout/modal";
import { UserContext } from "../../context/userContext";

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
  flows,
  colorPrimary
}) => {
  const { currentUserPermissions } = useContext(UserContext);
  const columns = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "key",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "key",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "key",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "key",
      align: "left",
      render: (cell, row) => {
        console.log("cell", cell);

        return (
          <div>
            {cell.map((role) => (
              <Tag color={colorPrimary} key={role.id}>{role.roleName}</Tag>
            ))}
          </div>
        );
      },
    },
    {
      title: "Flows",
      dataIndex: "flows",
      key: "key",
      align: "left",
      render: (cell, row) => {
        console.log("cell", cell);

        return (
          <div>
            {cell.map((flow) => (
              <Tag color={colorPrimary} key={flow.id}>{flow.flowName}</Tag>
            ))}
          </div>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
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
            style={
              currentUserPermissions?.some(
                (permissionName) => permissionName === "user.edit"
              )
                ? { display: "inherit" }
                : { display: "none" }
            }
          />
          <Button
            type="primary"
            shape="circle"
            onClick={() => onClickDelete(record.key)}
            icon={<DeleteOutlined />}
            style={currentUserPermissions?.some(permissionName=>permissionName==="user.delete") ? {display:"inherit"} : {display:"none"} }
            danger
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      {currentUserPermissions?.some(
        (permissionName) => permissionName === "user.add"
      ) && (
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
      )}
      <Table columns={columns} dataSource={list} />
      {isModalOpen && (
        <UserLayoutModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onFinish={onFinish}
          editUser={editUser}
          onCancel={onCancel}
          roles={roles}
          flows={flows}
        />
      )}
    </div>
  );
};

export default UserLayout;
