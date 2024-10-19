// const TopBar = () => (
//     <div className="flex justify-between p-4 bg-lightblue">
//         <div>
//             <input type="text" className="p-2 rounded-md" placeholder="Search Properties" />
//         </div>
//         <div className="flex items-center">
//             <button className="bg-white p-2 rounded-md text-darkblue">Add Wallet</button>
//             <div className="ml-4">Hello, Fattah</div>
//         </div>
//     </div>
// );
// export default TopBar;  
import { useAuth } from "../../contexts/authContext";
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Topbar = () => {
    const { walletAddress, connectWallet, disconnectWallet, user } = useAuth();  // Assuming these are available in your context
    const [search, setSearch] = useState('');

    return (
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex justify-between items-center px-6 py-4 shadow-md">
            {/* Dashboard Title */}
            {/* <div className="flex items-center">
                <h1 className="text-xl font-semibold">My Dashboard</h1>
            </div> */}

            {/* Search Bar */}
            <div className="relative w-1/2">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full py-2 px-4 bg-indigo-800 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
                    placeholder="Search Properties"
                />
                <MagnifyingGlassIcon className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
            </div>

            {/* User Profile and Wallet Connection */}
            <div className="flex items-center space-x-4">
                {/* User Profile */}
                <div className="flex items-center space-x-2">
                    <span>Hello,{user.email || user.address}</span>
                    <img src="https://via.placeholder.com/30" alt="Profile" className="h-10 w-10 rounded-full border-2 border-blue-500" />
                </div>

                {/* Wallet Button */}
                {walletAddress ? (
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-blue-300">{user.address}</span>
                        <button
                            onClick={disconnectWallet}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Disconnect Wallet
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={connectWallet}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Connect Wallet
                    </button>
                )}
            </div>
        </div>
    );
};

export default Topbar;
