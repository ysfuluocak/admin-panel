import { Form, Input, Select, Button } from "antd";
import React, { useEffect } from "react";

const RoleLayoutForm = ({ onFinish, permissions, editRole }) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  useEffect(() => {
    if (editRole) {
      form.setFieldValue({
        roleName: editRole.roleName,
        permissions: editRole.permissions,
      });
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line
  }, [form]);

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
        label="Role Name"
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
        <Select mode="multiple" placeholder="Select permissions">
          {permissions.map((permission) => (
            <Option key={permission.id} value={permission.id}>
              {permission.permissionName}
            </Option>
          ))}
        </Select>
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
