import React, { useState } from 'react';

export default function LogInteractionChat() {
  const [chat, setChat] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    const res = await fetch('http://localhost:8000/ai/log_interaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: chat })
    });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h2>Log Interaction (Chat)</h2>
      <textarea value={chat} onChange={e => setChat(e.target.value)} />
      <button onClick={handleSend}>Send</button>
      <pre>{response}</pre>
    </div>
  );
}
