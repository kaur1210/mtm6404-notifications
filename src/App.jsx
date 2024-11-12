import React, { useState } from 'react';
import { notificationsData } from './notifications'; // Import notification data
import NotificationList from './components/NotificationList'; // Import NotificationList component

function App() {
  // Initialize state with notificationsData
  const [notifications, setNotifications] = useState(notificationsData);

  // Function to clear an individual notification by id
  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  // Function to clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App container mt-5">
      <h1 className="text-center mb-4">Notifications</h1>

      {/* Display total count of notifications */}
      <h2 className="text-center mb-4">
        Notifications ({notifications.length})
      </h2>

      {/* Render the NotificationList component to display notifications */}
      <NotificationList notifications={notifications} onClear={clearNotification} />

      {/* Button to clear all notifications */}
      <div className="text-center mt-4">
        <button 
          onClick={clearAllNotifications} 
          className="btn btn-danger">
          Clear All Notifications
        </button>
      </div>
    </div>
  );
}

export default App;
