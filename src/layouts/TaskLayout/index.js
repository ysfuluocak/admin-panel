import React,{useContext} from "react";
import { Table, Space, Button, Col, Row } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import TaskLayoutModal from "./modal";
import { UserContext } from "../../context/userContext";

const TaskLayout = ({
  list,
  onFinish,
  isModalOpen,
  setIsModalOpen,
  onClickDelete,
  onClickEdit,
  onClickAdd,
  editTask,
  setEditTask,
  colorPrimary
}) => {
  const { currentUserPermissions } = useContext(UserContext);
  const onCancel = () => {
    setIsModalOpen(false);
    setEditTask();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "taskName",
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
            style={currentUserPermissions?.some(permissionName=>permissionName==="task.edit") ? {display:"inherit"} : {display:"none"} }
          />

          <Button
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => onClickDelete(record.key)}
            style={currentUserPermissions?.some(permissionName=>permissionName==="task.delete") ? {display:"inherit"} : {display:"none"} }
            danger
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
     {currentUserPermissions?.some((permissionName) => permissionName === "task.add") && (
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
        <TaskLayoutModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onFinish={onFinish}
          editTask={editTask}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};

export default TaskLayout;
