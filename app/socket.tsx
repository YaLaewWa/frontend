'use client';
import React, { useEffect, useState } from 'react';

interface SocketProp{
    backendUrl: string
}

export function Socket({
    backendUrl
} : SocketProp) {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const socket = new WebSocket(backendUrl);

  useEffect(() => {

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

  const sendMessage = () => {
    // socket.send(inputValue);
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(inputValue);
    } else {
      console.log("websocket is not connected");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className='text-black justify-center items-center flex'>
      <div >
        {messages.map((msg, index) => (
          <div className='bg-amber-50 border-2 rounded-lg justify-center items-center flex m-2 p-2' key={index}>{msg}</div>
        ))}
        <div className='flex justify-center items-center'>
          <input
            type="text"
            className="border rounded-lg py-2 justify-center items-center flex m-1"
            placeholder="Type your message here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    
  );
}
