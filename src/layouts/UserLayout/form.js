import { Form, Select, Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";

const UserLayoutForm = ({ onFinish, editUser, roles, flows }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (editUser) {
      form.setFieldsValue({
        ...editUser,
        roles: editUser.roles.map((role) => role.id),
        flows: editUser.flows.map((flow) => flow.id),
      });
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line
  }, [form, editUser]);

  return (
    <Form
      form={form}
      name="role"
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
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input your firstName!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: "Please input your lastName!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: "Please input your age!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Roles"
        name="roles"
        rules={[
          {
            required: true,
            message: "Please select at least one permission!",
          },
        ]}
      >
        <Select
          mode="multiple"
          allowClear
          options={roles.map((role) => ({
            value: role.id,
            label: role.roleName,
          }))}
        />
      </Form.Item>

      <Form.Item
        label="Flows"
        name="flows"
        rules={[
          {
            required: true,
            message: "Please select at least one flows!",
          },
        ]}
      >
        <Select
          mode="multiple"
          allowClear
          options={flows.map((flow) => ({
            value: flow.id,
            label: flow.flowName,
          }))}
        />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your lastName!",
          },
        ]}
      >
        <TextArea />
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

export default UserLayoutForm;
