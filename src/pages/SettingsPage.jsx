import { useState } from 'react';
import {
    UserCircleIcon,
    BellAlertIcon,
    ShieldCheckIcon,
    AdjustmentsHorizontalIcon,
    MoonIcon,
    LockClosedIcon,
} from '@heroicons/react/24/outline';

const tabs = [
    { name: 'Account', icon: UserCircleIcon },
    { name: 'Notifications', icon: BellAlertIcon },
    { name: 'Security', icon: ShieldCheckIcon },
    { name: 'Appearance', icon: MoonIcon },
    { name: 'Preferences', icon: AdjustmentsHorizontalIcon },
    { name: 'Privacy', icon: LockClosedIcon },
];

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('Account');

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 p-4 md:p-10">
            {/* Sidebar */}
            <div className="w-full md:w-1/5 bg-white shadow-lg rounded-lg p-4 space-y-6 mb-6 md:mb-0">
                <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
                <ul className="space-y-4">
                    {tabs.map((tab) => (
                        <li
                            key={tab.name}
                            className={`flex items-center space-x-2 p-3 cursor-pointer rounded-lg ${activeTab === tab.name
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 hover:bg-gray-200'
                                }`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            <tab.icon className="h-6 w-6" />
                            <span>{tab.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white shadow-lg rounded-lg p-8 md:ml-6">
                {activeTab === 'Account' && <AccountSettings />}
                {activeTab === 'Notifications' && <NotificationSettings />}
                {activeTab === 'Security' && <SecuritySettings />}
                {activeTab === 'Appearance' && <AppearanceSettings />}
                {activeTab === 'Preferences' && <PreferencesSettings />}
                {activeTab === 'Privacy' && <PrivacySettings />}
            </div>
        </div>
    );
};

const AccountSettings = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Settings</h2>
        <form className="space-y-6">
            <div className="flex flex-col">
                <label className="text-gray-700">Username</label>
                <input
                    type="text"
                    className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-500"
                    placeholder="Username"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-gray-700">Email</label>
                <input
                    type="email"
                    className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-500"
                    placeholder="Email"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-gray-700">Password</label>
                <input
                    type="password"
                    className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-500"
                    placeholder="Password"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
            >
                Save Changes
            </button>
        </form>
    </div>
);

const NotificationSettings = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notification Settings</h2>
        <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-5 w-5 text-blue-500" />
                <label className="text-gray-700">Email Notifications</label>
            </div>
            <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-5 w-5 text-blue-500" />
                <label className="text-gray-700">In-App Notifications</label>
            </div>
        </div>
    </div>
);

const SecuritySettings = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security Settings</h2>
        <form className="space-y-6">
            <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-5 w-5 text-blue-500" />
                <label className="text-gray-700">Enable Two-Factor Authentication</label>
            </div>
            <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-5 w-5 text-blue-500" />
                <label className="text-gray-700">Enable Login Alerts</label>
            </div>
        </form>
    </div>
);

const AppearanceSettings = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Appearance Settings</h2>
        <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <input type="radio" name="theme" className="h-5 w-5 text-blue-500" />
                <label className="text-gray-700">Light Mode</label>
            </div>
            <div className="flex items-center space-x-3">
                <input type="radio" name="theme" className="h-5 w-5 text-blue-500" />
                <label className="text-gray-700">Dark Mode</label>
            </div>
        </div>
    </div>
);

const PreferencesSettings = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preferences Settings</h2>
        <div className="space-y-4">
            <div className="flex flex-col">
                <label className="text-gray-700">Language</label>
                <select className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-500">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-gray-700">Currency</label>
                <select className="border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-500">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                </select>
            </div>
        </div>
    </div>
);

const PrivacySettings = () => (
    <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Settings</h2>
        <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-5 w-5 text-blue-500" />
                <label className="text-gray-700">Enable Data Sharing</label>
            </div>
            <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-5 w-5 text-blue-500" />
                <label className="text-gray-700">Delete Account</label>
            </div>
        </div>
    </div>
);

export default SettingsPage;