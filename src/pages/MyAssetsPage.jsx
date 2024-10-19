// /* eslint-disable no-unused-vars */
// import { useState } from 'react';
// import { AssetsPropertyCard } from '../components/Dashboard/AssetsPropertyCard';

// const MyAssetsPage = () => {
//     const assetList = [
//         {
//             id: 1,
//             title: '2B Ebele Avenue, Bayelsa, Nigeria',
//             location: '30ft Sq/m',
//             price: '23,300',
//             image: 'https://via.placeholder.com/300x200',
//         },
//         {
//             id: 2,
//             title: '3A Queensway, Lagos, Nigeria',
//             location: '25ft Sq/m',
//             price: '18,500',
//             image: 'https://via.placeholder.com/300x200',
//         },
//         {
//             id: 3,
//             title: 'Luxury Villa, Abuja, Nigeria',
//             location: '50ft Sq/m',
//             price: '45,700',
//             image: 'https://via.placeholder.com/300x200',
//         },
//         // Add more assets...
//     ];

//     const [assets, setAssets] = useState(assetList); // assetList would be fetched from API or state

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-3xl font-bold text-gray-800">My Assets</h1>

//                 {/* Search Bar */}
//                 <div className="relative">
//                     <input
//                         type="text"
//                         className="px-4 py-2 border rounded-md shadow-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Search your assets..."
//                     />
//                     <button className="absolute right-2 top-2 text-gray-500">
//                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m-3.65-1.65a6.5 6.5 0 1112-12 6.5 6.5 0 010 13z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Asset Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {assets.length > 0 ? (
//                     assets.map((asset) => (
//                         <AssetsPropertyCard key={asset.id} property={asset} />
//                     ))
//                 ) : (
//                     <p className="col-span-full text-center text-gray-500">No assets found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyAssetsPage;

import { useState } from 'react';

const MyAssetsPage = () => {
    const [activeTab, setActiveTab] = useState('owned');

    const ownedAssets = [
        {
            id: 1,
            name: "Beachfront Villa",
            location: "Miami, FL, USA",
            value: 230000,
            ownership: 50,
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        },
        {
            id: 2,
            name: "Luxury Apartment",
            location: "New York, NY, USA",
            value: 150000,
            ownership: 75,
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        },
        {
            id: 3,
            name: "Modern Loft",
            location: "Los Angeles, CA, USA",
            value: 120000,
            ownership: 40,
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        },
        {
            id: 4,
            name: "Country House",
            location: "Austin, TX, USA",
            value: 80000,
            ownership: 25,
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        },
        {
            id: 5,
            name: "Townhouse",
            location: "San Francisco, CA, USA",
            value: 210000,
            ownership: 60,
            image: "https://example.com/townhouse.jpg",
        },
    ];

    const listedAssets = [
        {
            id: 1,
            name: "Penthouse Suite",
            location: "Chicago, IL, USA",
            listedPrice: 350000,
            status: "Listed for Sale",
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        },
        {
            id: 2,
            name: "Countryside Estate",
            location: "Nashville, TN, USA",
            listedPrice: 250000,
            status: "Listed for Sale",
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        },
        {
            id: 3,
            name: "Urban Condo",
            location: "Seattle, WA, USA",
            listedPrice: 180000,
            status: "Listed for Sale",
            image: "https://images.unsplash.com/photo-1600585154306-35c12d381983",
        },
    ];


    return (
        <div className="min-h-screen p-6 bg-gray-100">
            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900">My Assets</h1>
                <div className="mt-2 flex justify-between items-center">
                    <div>
                        <h2 className="text-lg text-gray-600">Total Assets Value:</h2>
                        <h3 className="text-2xl font-bold text-blue-600">$400,000</h3>
                    </div>
                    <div>
                        <h2 className="text-lg text-gray-600">Fractions Owned:</h2>
                        <h3 className="text-xl font-semibold text-blue-600">45%</h3>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
                <button
                    className={`px-6 py-2 text-lg font-semibold rounded-md focus:outline-none ${activeTab === 'owned' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                        }`}
                    onClick={() => setActiveTab('owned')}
                >
                    Owned Assets
                </button>
                <button
                    className={`px-6 py-2 text-lg font-semibold rounded-md focus:outline-none ${activeTab === 'listed' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                        }`}
                    onClick={() => setActiveTab('listed')}
                >
                    Listed by Me
                </button>
            </div>

            {/* Asset List */}
            <div>
                {activeTab === 'owned' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ownedAssets.map((asset, index) => (
                            <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
                                <img src={asset.image} alt={asset.name} className="w-full h-48 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold mt-4">{asset.name}</h3>
                                <p className="text-gray-600">{asset.location}</p>
                                <div className="mt-2">
                                    <span className="text-blue-600 font-bold">${asset.value}</span>
                                    <span className="ml-2 text-gray-500">({asset.ownership}% ownership)</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listedAssets.map((asset, index) => (
                            <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
                                <img src={asset.image} alt={asset.name} className="w-full h-48 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold mt-4">{asset.name}</h3>
                                <p className="text-gray-600">{asset.location}</p>
                                <div className="mt-2">
                                    <span className="text-blue-600 font-bold">${asset.listedPrice}</span>
                                    <span className="ml-2 text-gray-500">({asset.status})</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyAssetsPage;
