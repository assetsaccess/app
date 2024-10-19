/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useAuth } from '../contexts/authContext'; // Auth context for wallet connection
import { PropertyCard } from '../components/Dashboard/PropertyCard'; // Component for property cards
// import { FilterIcon } from '@heroicons/react/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Filters } from '../components/Dashboard/Filter';

const MarketplacePage = () => {
    const propertyList = [
        {
            id: 1,
            title: 'Luxury Apartment in New York',
            location: 'Manhattan, New York, USA',
            price: '1,200,000',
            image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
        },
        {
            id: 2,
            title: 'Beach House in Miami',
            location: 'Miami Beach, Florida, USA',
            price: '2,500,000',
            image: 'https://images.unsplash.com/photo-1560185127-6a99a7551552',
        },
        {
            id: 3,
            title: 'Modern Villa in Los Angeles',
            location: 'Beverly Hills, California, USA',
            price: '3,000,000',
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
        },
        {
            id: 4,
            title: 'Country Home in Texas',
            location: 'Austin, Texas, USA',
            price: '800,000',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        },
        {
            id: 5,
            title: 'Penthouse in Dubai',
            location: 'Downtown Dubai, UAE',
            price: '4,500,000',
            image: 'https://images.unsplash.com/photo-1600585154306-35c12d381983',
        },
        {
            id: 6,
            title: 'Cozy Cabin in Colorado',
            location: 'Aspen, Colorado, USA',
            price: '900,000',
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
        },
    ];

    const { walletConnected } = useAuth(); // Wallet state
    const [properties, setProperties] = useState(propertyList); // Property list
    const [filters, setFilters] = useState({}); // Filter state

    const applyFilters = (filterValues) => {
        setFilters(filterValues);
        // Fetch or filter properties based on new filter values
    };
    return (
        <div className="min-h-screen bg-gray-50 text-white">
            {/* Topbar */}
            {/* <div className="flex justify-between p-4 bg-blue-900 items-center">
                <h1 className="text-2xl font-bold">Marketplace</h1>
                <div className="flex items-center gap-4">
                    <div className="relative w-96">
                        <input
                            type="text"
                            placeholder="Search properties"
                            className="w-full rounded-full px-4 py-2 bg-gray-800 text-gray-200 placeholder-gray-400"
                        />
                        < MagnifyingGlassIcon className="absolute right-4 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
                    </button>
                </div>
            </div> */}

            {/* Filter Section (optional) */}
            {/* <div className="flex p-4">
                {/* Sidebar filters */}
            {/* <Filters applyFilters={applyFilters} /> */}

            {/* Property grid 
                <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div> */}
            <div className="flex flex-col p-4">
                {/* Filters Section */}
                <Filters applyFilters={applyFilters} />

                {/* Property Grid */}
                <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-4">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            </div>

            {/* Pagination or Load More */}
            <div className="flex justify-center my-8">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Load More Properties
                </button>
            </div>
        </div>
    );
};

export default MarketplacePage;
