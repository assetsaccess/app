import { useState } from 'react';

const transactions = [
    {
        id: 'TXN12345678',
        date: '2024-10-05',
        type: 'Deposit',
        status: 'Completed',
        amount: 5000,
        currency: 'USDT',
    },
    {
        id: 'TXN98765432',
        date: '2024-10-04',
        type: 'Withdrawal',
        status: 'Pending',
        amount: 2500,
        currency: 'ETH',
    },
    {
        id: 'TXN13579246',
        date: '2024-10-03',
        type: 'Deposit',
        status: 'Failed',
        amount: 1500,
        currency: 'BTC',
    },
];

const TransactionHistory = () => {
    const [activeTab, setActiveTab] = useState('All');

    const renderStatus = (status) => {
        switch (status) {
            case 'Completed':
                return <span className="text-green-500">Completed</span>;
            case 'Pending':
                return <span className="text-yellow-500">Pending</span>;
            case 'Failed':
                return <span className="text-red-500">Failed</span>;
            default:
                return <span>{status}</span>;
        }
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Transaction History</h2>
                <div className="space-x-4">
                    <button
                        className={`${activeTab === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                            } px-4 py-2 rounded-lg focus:outline-none`}
                        onClick={() => setActiveTab('All')}
                    >
                        All
                    </button>
                    <button
                        className={`${activeTab === 'Deposit' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                            } px-4 py-2 rounded-lg focus:outline-none`}
                        onClick={() => setActiveTab('Deposit')}
                    >
                        Deposits
                    </button>
                    <button
                        className={`${activeTab === 'Withdrawal' ? 'bg-blue-500 text-white' : 'bg-gray-100'
                            } px-4 py-2 rounded-lg focus:outline-none`}
                        onClick={() => setActiveTab('Withdrawal')}
                    >
                        Withdrawals
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr className="text-left text-gray-600 bg-gray-100">
                            <th className="px-4 py-2 border">Date</th>
                            <th className="px-4 py-2 border">Type</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Amount</th>
                            <th className="px-4 py-2 border">Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {transactions.map((txn) => (
                            <tr key={txn.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-2 border">{txn.date}</td>
                                <td className="px-4 py-2 border">{txn.type}</td>
                                <td className="px-4 py-2 border">{renderStatus(txn.status)}</td>
                                <td className="px-4 py-2 border">
                                    {txn.amount} {txn.currency}
                                </td>
                                <td className="px-4 py-2 border">{txn.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionHistory;
