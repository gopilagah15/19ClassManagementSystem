import React, { useState } from 'react';

const Notifications = ({ notifications, addNotification }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotification({ id: Date.now(), message });
    setMessage('');
  };

  return (
    <div>
      <h2>Notifications</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Notification message"
          required
        />
        <button type="submit">Add Notification</button>
      </form>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
