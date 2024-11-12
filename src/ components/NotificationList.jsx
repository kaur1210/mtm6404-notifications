import React from 'react';
import Notification from './Notification'; 

const NotificationList = ({ notifications, onClear }) => {
  return (
    <div>
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          notification={notification}
          onClear={onClear} 
        />
      ))}
    </div>
  );
};

export default NotificationList;
