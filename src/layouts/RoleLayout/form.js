import { Form, Input, Select, Button } from "antd";
import React, { useEffect } from "react";

const RoleLayoutForm = ({ onFinish, permissions, editRole }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (editRole) {
      form.setFieldsValue({
        roleName: editRole.roleName,
        permissions: editRole.permissions.map((p) => p.id),
      });
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line
  }, [form, editRole]);

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
        label="Name"
        name="roleName"
        rules={[
          {
            required: true,
            message: "Please input your permissionName!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Permissions"
        name="permissions"
        rules={[
          {
            required: true,
            message: "Please select at least one permission!",
          },
        ]}
      >
        <Select
          mode="multiple"
          options={permissions.map((permission) => ({
            value: permission.id,
            label: permission.permissionName,
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

export default RoleLayoutForm;
