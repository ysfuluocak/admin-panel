import { Form, Input, Button } from "antd";
import React, { useEffect } from "react";

const TaskLayoutForm = ({ onFinish, editTask }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (editTask) {
      form.setFieldsValue({ taskName: editTask.taskName });
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line
  }, [form, editTask]);

  return (
    <Form
      form={form}
      name="task"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="taskName"
        rules={[
          {
            required: true,
            message: "Please input your Task Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskLayoutForm;
