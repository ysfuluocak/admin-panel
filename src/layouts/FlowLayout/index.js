import React, { useContext } from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Table, Button, Space, Row, Col, Tag } from "antd";
import FlowLayoutModal from "./modal";
import { UserContext } from "../../context/userContext";

const FlowLayout = ({
  list,
  onClickAdd,
  onClickDelete,
  onClickEdit,
  isModalOpen,
  setIsModalOpen,
  onFinish,
  editFlow,
  tasks,
  onCancel,
  colorPrimary
}) => {
  const { currentUserPermissions } = useContext(UserContext);
  console.log("flow", currentUserPermissions);
  const columns = [
    {
      title: "Name",
      dataIndex: "flowName",
      key: "key",
      align: "left",
      render: (cell, row) => {
        return cell;
      },
    },
    {
      title: "Tasks",
      dataIndex: "tasks",
      key: "key",
      align: "left",
      render: (cell, row) => {
        console.log("cell", cell);

        return (
          <div>
            {cell.map((task) => (
              <Tag color={colorPrimary} key={task.id}>{task.taskName}</Tag>
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
            style={currentUserPermissions?.some(permissionName=>permissionName==="flow.edit") ? {display:"inherit"} : {display:"none"} }
          />
          <Button
            type="primary"
            shape="circle"
            onClick={() => onClickDelete(record.key)}
            icon={<DeleteOutlined />}
            style={currentUserPermissions?.some(permissionName=>permissionName==="flow.delete") ? {display:"inherit"} : {display:"none"} }
            danger
          />
        </Space>
      ),
    },
  ];
  
  return (
    <div>
      {currentUserPermissions?.some((permissionName) => permissionName === "flow.add") && (
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
        <FlowLayoutModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onFinish={onFinish}
          editFlow={editFlow}
          tasks={tasks}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};

export default FlowLayout;
