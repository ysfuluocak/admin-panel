import React, { useEffect } from "react";
import { Form, Input, Button,Select } from "antd";

const FlowLayoutForm = ({ onFinish, editFlow,tasks, form }) => {
  useEffect(() => {
    if (editFlow) {
      form.setFieldsValue({
        flowName: editFlow.flowName,
        tasks: editFlow.tasks.map((t) => ({
          label: t.taskName,
          value: t.id,
        })),
      });
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line
  }, [form, editFlow]);

  return (
    <Form
      form={form}
      name="flow"
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
        name="flowName"
        rules={[
          {
            required: true,
            message: "Please input your Flow Name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tasks"
        name="tasks"
        rules={[
          {
            required: true,
            message: "Please select at least one tasks!",
          },
        ]}
      >
        <Select
          mode="multiple"
          options={tasks.map((task) => ({
            value: task.id,
            label: task.taskName,
          }))}
        />
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

export default FlowLayoutForm;
