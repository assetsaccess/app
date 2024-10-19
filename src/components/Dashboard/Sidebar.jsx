// const Sidebar = () => (
//     <div className="w-64 h-screen bg-darkblue text-white p-4">
//         <div className="text-2xl mb-10">AssetsAccess</div>
//         <nav>
//             <ul>
//                 <li className="mb-4">Dashboard</li>
//                 <li className="mb-4">Market Place</li>
//                 <li className="mb-4">My Assets</li>
//                 <li className="mb-4">Notification</li>
//                 <li className="mb-4">Settings</li>
//             </ul>
//         </nav>
//     </div>
// );

// export default Sidebar;
import { useState, useEffect } from 'react';
import { HomeIcon, ShoppingBagIcon, ArchiveBoxIcon, BellIcon, CogIcon, CpuChipIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    // const [active, setActive] = useState('Dashboard');
    const location = useLocation();
    const [active, setActive] = useState('');

    useEffect(() => {
        const path = location.pathname.split('/')[2] || 'Dashboard';
        setActive(path.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()));
    }, [location]);

    const menuItems = [
        { name: 'Dashboard', icon: <HomeIcon className="h-6 w-6" />, page: 'Dashboard' },
        { name: 'Market place', icon: <ShoppingBagIcon className="h-6 w-6" />, page: 'Marketplace' },
        { name: 'My Assets', icon: <ArchiveBoxIcon className="h-6 w-6" />, page: 'Assets' },
        { name: 'Access Ai', icon: <CpuChipIcon className="h-6 w-6" />, page: 'AccessAi' },
        { name: 'Notification', icon: <BellIcon className="h-6 w-6" />, page: 'Notification' },
        { name: 'Settings', icon: <CogIcon className="h-6 w-6" />, page: 'Settings' },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-900 to-indigo-900 text-white h-screen w-64 flex flex-col items-center py-6">
            {/* Logo and Brand Name */}
            <div className="mb-12 flex items-center justify-center">
                <img src={logo} alt="logo" className="h-12 w-12" />
                <span className="ml-2 text-lg font-semibold">AssetsAccess</span>
            </div>

            {/* Navigation Items */}
            <div className="space-y-4 w-full">
                {menuItems.map((item, index) => (
                    <Link
                        to={item.page === 'Dashboard' ? '/dashboard' : `/dashboard/${item.page.toLowerCase()}`}
                        key={index}
                        onClick={() => setActive(item.page)}
                        className={`cursor-pointer flex items-center px-4 py-3 mx-4 rounded-lg transition-all duration-300 ease-in-out
                        ${active === item.page
                                ? 'bg-blue-600 shadow-lg text-white'
                                : 'bg-blue-900 hover:bg-blue-700 text-gray-300'
                            }`}
                    >
                        {item.icon}
                        <span className="ml-4 text-base font-medium">{item.name}</span>
                    </Link>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-auto text-center text-gray-400 text-xs">
                <p>Copyright ©</p>
                <p>AssetsAccess 2024</p>
            </div>
        </div>
        // <div className="relative bg-gradient-to-b from-purple-900 to-indigo-900 text-white h-screen w-64 flex flex-col items-center py-6">
        //     {/* Sliding Indicator */}
        //     <div className={`absolute left-0 top-${menuItems.findIndex(item => item.page === active) * 12 + 8} transition-all duration-500 ease-in-out bg-blue-600 h-12 w-1`} />

        //     {/* Logo and Brand Name */}
        //     <div className="mb-12 flex items-center justify-center">
        //         <img src={logo} alt="logo" className="h-12 w-12 animate-pulse" />
        //         <span className="ml-2 text-lg font-semibold text-blue-300">AssetsAccess</span>
        //     </div>

        //     {/* Navigation Items */}
        //     <div className="space-y-4 w-full relative">
        //         {menuItems.map((item, index) => (
        //             <div
        //                 key={index}
        //                 onClick={() => setActive(item.page)}
        //                 className={`cursor-pointer flex items-center px-4 py-3 mx-4 rounded-lg transition-all duration-300 ease-in-out relative
        //                 ${active === item.page
        //                         ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 shadow-xl text-white'
        //                         : 'bg-blue-900 hover:bg-gradient-to-r hover:from-indigo-700 hover:via-purple-800 hover:to-blue-700 text-gray-300'
        //                     } group hover:scale-105 hover:shadow-2xl`}
        //             >
        //                 <div className="flex items-center">
        //                     {item.icon}
        //                     <span className={`ml-4 text-base font-medium group-hover:scale-110 transition-transform duration-200 ease-in-out
        //                         ${active === item.page ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
        //                         {item.name}
        //                     </span>
        //                 </div>
        //                 {/* Neon glow effect */}
        //                 {active === item.page && (
        //                     <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 opacity-30 blur-lg rounded-lg"></div>
        //                 )}
        //             </div>
        //         ))}
        //     </div>

        //     {/* Footer */}
        //     <div className="mt-auto text-center text-gray-400 text-xs">
        //         <p>Copyright ©</p>
        //         <p className="text-blue-300">AssetsAccess 2024</p>
        //     </div>
        // </div>
    );
};

export default Sidebar;
