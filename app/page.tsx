'use client';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:6969/ws');

    socket.onmessage = (event) => {
      setMessages((messages) => [...messages, event.data]);
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error: ', error);
    };

    socket.onopen = () => {
      console.log('WebSocket Connected');
    };

    socket.onclose = () => {
      console.log('WebSocket Closed');
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className='text-black justify-center items-center flex'>
      {messages.length > 0 && (
        <div >
          {messages.map((msg, index) => (
            <div className='bg-amber-50 border-2 rounded-lg justify-center items-center flex m-2 p-2' key={index}>{msg}</div>
          ))}
        </div>
      )}
    </div>
  );
}
