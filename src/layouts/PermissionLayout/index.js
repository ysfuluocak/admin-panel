import React,{useContext} from "react";
import { Table, Space, Button, Col, Row } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import PermissionLayoutModal from "./modal";
import { UserContext } from "../../context/userContext";

const PermissionLayout = ({
  list,
  onFinish,
  isModalOpen,
  setIsModalOpen,
  onClickDelete,
  onClickEdit,
  onClickAdd,
  editedPermission,
  setEditPermission,
}) => {
  const { currentUserPermissions } = useContext(UserContext);
  const onCancel = () => {
    setIsModalOpen(false);
    setEditPermission();
  };

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
            style={currentUserPermissions?.some(permissionName=>permissionName==="permission.edit") ? {display:"inherit"} : {display:"none"} }
          />

          <Button
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => onClickDelete(record.key)}
            style={currentUserPermissions?.some(permissionName=>permissionName==="permission.delete") ? {display:"inherit"} : {display:"none"} }
            danger
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      {currentUserPermissions?.some((permissionName) => permissionName === "permission.add") && (
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
        <PermissionLayoutModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onFinish={onFinish}
          editedPermission={editedPermission}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};

export default PermissionLayout;
