import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

const PermissionLayoutForm = ({ onFinish, editedPermission }) => {
  const [form] = Form.useForm();
  
  useEffect(() => {
    if (editedPermission) {
      form.setFieldsValue({ permissionName: editedPermission.permissionName });
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line
  }, [editedPermission]);

  return (
    <Form
      form={form}
      name="permission"
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
        label="Permission Name"
        name="permissionName"
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

export default PermissionLayoutForm;
