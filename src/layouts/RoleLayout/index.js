import React,{useContext} from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Table, Button, Space, Row, Col, Tag } from "antd";
import RoleLayoutModal from "./modal";
import { UserContext } from "../../context/userContext";

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
  onCancel,
  colorPrimary
}) => {
  const { currentUserPermissions } = useContext(UserContext);
  const columns = [
    {
      title: "Name",
      dataIndex: "roleName",
      key: "roleName",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
    },
    {
      title: "Permission",
      dataIndex: "permissions",
      key: "permissions",
      align: "left",
      render: (cell, row) => {
        console.log("cell", cell);

        return (
          <div>
            {cell.map((permission) => (
              <Tag color={colorPrimary} key={permission.id}>{permission.permissionName}</Tag>
            ))}
          </div>
        );
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
            style={currentUserPermissions?.some(permissionName=>permissionName==="role.edit") ? {display:"inherit"} : {display:"none"} }
          />
          <Button
            type="primary"
            shape="circle"
            onClick={() => onClickDelete(record.key)}
            icon={<DeleteOutlined />}
            style={currentUserPermissions?.some(permissionName=>permissionName==="role.delete") ? {display:"inherit"} : {display:"none"} }
            danger
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      {currentUserPermissions?.some((permissionName) => permissionName === "role.add") && (
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
        <RoleLayoutModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onFinish={onFinish}
          editRole={editRole}
          permissions={permissions}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};

export default RoleLayout;
