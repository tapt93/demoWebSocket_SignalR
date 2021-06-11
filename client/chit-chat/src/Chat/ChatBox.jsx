import React from 'react'
import Message from './Message'

export default function ChatBox({ chat }) {
  return (
    <div style={{display: 'block', width: '100%', minHeight:200, border: '1px solid #ccc', margin: 20}}>
      {chat && chat.map(m => <Message {...m} />)}
    </div>
  )
}
