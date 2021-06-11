import { Button, Form, Input } from 'antd';
import React from 'react'

export default function ChatInput({ sendMessage }) {
  const [form] = Form.useForm();

  function onSubmit({user, message}) {
    if (user && message) {
      sendMessage(user, message);
    }
  }
  const layout = {
    labelCol: { span:4  },
    wrapperCol: { span: 16 },
  };

  return (
    <Form form={form} onFinish={onSubmit} {...layout}>
      <Form.Item
        label="User"
        name="user"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Message"
        name="message"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button htmlType="submit" type="primary">Send</Button>
      </Form.Item>
    </Form>
  )
}
