import React from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Table, Button, Space, Row, Col, Tag } from "antd";
import FlowLayoutModal from "./modal";

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
}) => {
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
              <Tag key={task.id}>{task.taskName}</Tag>
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
