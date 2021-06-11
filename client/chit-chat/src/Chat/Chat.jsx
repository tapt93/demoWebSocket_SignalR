import { HubConnectionBuilder } from '@microsoft/signalr';
import React, { useEffect, useRef, useState } from 'react'
import ChatBox from './ChatBox';
import ChatInput from './ChatInput';

export default function Chat() {
  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const lastestChat = useRef(null);
  lastestChat.current = chat;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/hubs/chat')
      .withAutomaticReconnect()
      .build();
      setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start()
        .then(res => {
          connection.on('ReceiveMessage', message => {
            const updatedChat = [...lastestChat.current];
            updatedChat.push(message);
            setChat(updatedChat);
          })
        })
        .catch(e => console.log('Connect fail ', e))
    }
  }, [connection]);

  async function sendMessage(user, message) {
    debugger
    if (connection.connectionStarted) {
      try {
        await connection.send('SendMessage', { user, message });
      } catch (error) {
        console.log(error)
      }
    }
    else {
      alert('No connection')
    }
  }

  return (
    <div>
      <ChatBox chat={chat} />
      <ChatInput sendMessage={sendMessage} />

    </div>
  )
}
