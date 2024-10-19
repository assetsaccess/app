/* eslint-disable no-unused-vars */
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import TotalAssetsValue from "./TotalAssetsValue";
import MyAssets from "./Assets";
import TransactionHistory from "./TransactionHistory";
import ExploreProperties from "./ExploreProperties";
import { useAuth } from "../../contexts/authContext";
import Assets from "./Assets";

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <>
            < Assets />
            <div className="mt-4">
                <TransactionHistory />
            </div>

            <div className="mt-4">
                <ExploreProperties />
            </div>
        </>);
};

export default Dashboard;
