import { useState } from 'react';

const Support = () => {
  const [messages, setMessages] = useState([
    { from: 'support', text: 'سلام، چطور می‌تونم کمکتون کنم؟' },
    { from: 'user', text: 'درخواست من هنوز بررسی نشده!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { from: 'user', text: newMessage }]);
    setNewMessage('');
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">پشتیبانی فنی</h2>

      <div className="border border-gray-300 rounded h-64 p-4 overflow-y-auto mb-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 ${
              msg.from === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded ${
                msg.from === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-800'
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          type="text"
          className="flex-1 border border-gray-300 rounded p-2"
          placeholder="پیام خود را بنویسید..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition"
        >
          ارسال
        </button>
      </div>
    </div>
  );
};

export default Support;
