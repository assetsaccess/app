/* eslint-disable react/prop-types */
import { useState } from 'react';
import { BellIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const notificationsData = [
    {
        id: 1,
        title: "New Asset Purchase",
        message: "You have successfully purchased 20% of Beachfront Villa.",
        type: "transaction",
        timestamp: "2 hours ago",
        read: false,
    },
    {
        id: 2,
        title: "Listing Update",
        message: "Your listing for the Luxury Apartment has been approved.",
        type: "system",
        timestamp: "5 hours ago",
        read: true,
    },
    {
        id: 3,
        title: "Price Alert",
        message: "The token price for Urban Condo has dropped by 5%.",
        type: "alert",
        timestamp: "1 day ago",
        read: false,
    },
    // More notifications...
];

const NotificationItem = ({ notification, markAsRead }) => {
    const getIcon = (type) => {
        switch (type) {
            case 'transaction':
                return <CheckIcon className="h-6 w-6 text-green-500" />;
            case 'system':
                return <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />;
            case 'alert':
                return <BellIcon className="h-6 w-6 text-red-500" />;
            default:
                return <BellIcon className="h-6 w-6 text-blue-500" />;
        }
    };

    return (
        <div
            className={`flex items-center p-4 mb-2 rounded-lg shadow-lg transition-all 
      ${notification.read ? 'bg-gray-100' : 'bg-blue-50'} 
      hover:bg-gray-200`}
        >
            <div className="mr-4">{getIcon(notification.type)}</div>
            <div className="flex-1">
                <p className={`font-semibold ${notification.read ? 'text-gray-700' : 'text-blue-700'}`}>
                    {notification.title}
                </p>
                <p className="text-gray-500">{notification.message}</p>
                <span className="text-sm text-gray-400">{notification.timestamp}</span>
            </div>
            {!notification.read && (
                <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-blue-500 hover:underline text-sm"
                >
                    Mark as Read
                </button>
            )}
        </div>
    );
};

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState(notificationsData);

    const markAsRead = (id) => {
        setNotifications(
            notifications.map((notif) =>
                notif.id === id ? { ...notif, read: true } : notif
            )
        );
    };

    const markAllAsRead = () => {
        setNotifications(
            notifications.map((notif) => ({ ...notif, read: true }))
        );
    };

    return (
        <div className="p-6 bg-white min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-900">Notifications</h1>
                <button
                    onClick={markAllAsRead}
                    className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                >
                    Clear All
                </button>
            </div>

            {/* Notification List */}
            <div className="space-y-4">
                {notifications.map((notification) => (
                    <NotificationItem
                        key={notification.id}
                        notification={notification}
                        markAsRead={markAsRead}
                    />
                ))}
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
                <button className="text-blue-500 hover:underline">View All</button>
            </div>
        </div>
    );
};

export default NotificationsPage;
