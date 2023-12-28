import React from "react";
import { Table, Space, Button, Col, Row } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import TaskLayoutModal from "./modal";

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
}) => {
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
