import { Col, Row } from 'antd'
import React from 'react'

export default function Message({user, message}) {
  return (
    <div className="message">
      <Row>
        <Col span={3}><strong>{user}</strong>:</Col>
        <Col>{message}</Col>
      </Row>
      <p></p>
    </div>
  )
}
