import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <Topbar />

                {/* Outlet for nested routes */}
                <div className="flex-1 p-4 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;