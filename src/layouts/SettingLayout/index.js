import { Select, ColorPicker, Form, Button } from "antd";
import React, { useEffect } from "react";

const SettingLayout = ({ users, currentUser, onFinish, currentColor }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ currentUser: currentUser?.id, color: currentColor });
    // eslint-disable-next-line
  }, [currentUser, form]);

  return (
    <Form
      form={form}
      name="basic"
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
        label="User"
        name="currentUser"
        rules={[
          {
            required: true,
            message: "user is required!",
          },
        ]}
      >
        <Select
          options={users.map((user) => ({
            label: `${user.firstName} ${user.lastName}`,
            value: user.id,
          }))}
        />
      </Form.Item>

      <Form.Item
        label="Theme Color"
        name="color"
        rules={[
          {
            required: true,
            message: "color is required!",
          },
        ]}
      >
        <ColorPicker />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingLayout;
