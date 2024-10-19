import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline'; // Heroicons v2
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const assetsData = [
    {
        id: 1,
        imgUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
        price: '$23,300',
        address: '2B Ebele Avenue, Bayelsa, Nigeria',
        size: '30ft Sq/m',
    },
    {
        id: 2,
        imgUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
        price: '$23,300',
        address: 'Another Address, City, Country',
        size: '35ft Sq/m',
    },
    // Add more assets as necessary
];

const Assets = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % assetsData.length);
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dummy Data',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    // Options for the chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Dummy Data Chart',
            },
        },
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-4 text-white">
            {/* Left Section: Total Assets Value and Analysis */}
            <div className="space-y-6">
                {/* Total Assets Value */}
                <div className="bg-gradient-to-r from-indigo-800 to-purple-700 p-6 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold">Total Assets Value</h2>
                        <p className="text-4xl font-bold text-yellow-400">$300,000</p>
                    </div>
                    <CurrencyDollarIcon className="h-10 w-10 text-yellow-400" />
                </div>

                {/* Analysis Graph (Static Placeholder) */}
                <div className="bg-indigo-900 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Analysis</h2>
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-32 rounded-lg">
                        {/* Here you can integrate a real chart using Chart.js or another library */}
                        <Line data={data} options={options} />
                    </div>
                </div>
            </div>

            {/* Right Section: My Assets Carousel */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">My Assets</h2>
                <div className="bg-indigo-900 p-4 rounded-lg shadow-md">
                    {/* Carousel Item */}
                    <div className="relative">
                        {assetsData[currentIndex] && (
                            <div className="space-y-3">
                                {/* Property Image */}
                                <img
                                    src={assetsData[currentIndex].imgUrl}
                                    alt="Property"
                                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                                />

                                {/* Property Details */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xl font-semibold">{assetsData[currentIndex].price}</p>
                                        <p className="text-sm text-gray-300">{assetsData[currentIndex].address}</p>
                                        <p className="text-xs text-gray-500">{assetsData[currentIndex].size}</p>
                                    </div>
                                    {/* Sell Button */}
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-full text-sm">
                                        Sell
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-2 rounded-full"
                        >
                            <ChevronRightIcon className="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assets;
