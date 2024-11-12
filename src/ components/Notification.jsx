import React from 'react';

const Notification = ({ notification, onClear }) => {
  return (
    <div className="notification">
      <strong>{notification.name}:</strong> {notification.message}
      <button onClick={() => onClear(notification.id)}>Clear</button>
    </div>
  );
};

export default Notification;
