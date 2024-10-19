/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

export const Filters = ({ applyFilters }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const [propertyType, setPropertyType] = useState('All');

    const handleFilterApply = () => {
        applyFilters({ location, priceRange, propertyType });
    };

    return (
        <div className="bg-blue-900 p-4 rounded-lg">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-lg font-bold text-white">Filters</h2>
                {isOpen ? <ChevronUpIcon className="h-5 w-5 text-white" /> : <ChevronDownIcon className="h-5 w-5 text-white" />}
            </div>

            {isOpen && (
                <div className="mt-4 space-y-4">
                    {/* Location Filter */}
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-400">
                            Location
                        </label>
                        <input
                            id="location"
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full mt-1 px-3 py-2 bg-blue-800 text-gray-200 rounded-md"
                            placeholder="Enter location"
                        />
                    </div>

                    {/* Price Range Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400">Price Range</label>
                        <div className="flex gap-4 mt-1">
                            <input
                                type="number"
                                value={priceRange[0]}
                                onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                                className="w-full px-3 py-2 bg-blue-800 text-gray-200 rounded-md"
                                placeholder="Min Price"
                            />
                            <input
                                type="number"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                                className="w-full px-3 py-2 bg-blue-800 text-gray-200 rounded-md"
                                placeholder="Max Price"
                            />
                        </div>
                    </div>

                    {/* Property Type Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400">Property Type</label>
                        <select
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="w-full mt-1 px-3 py-2 bg-blue-800 text-gray-200 rounded-md"
                        >
                            <option value="All">All</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Land">Land</option>
                        </select>
                    </div>

                    {/* Apply Filter Button */}
                    <button
                        onClick={handleFilterApply}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Apply Filters
                    </button>
                </div>
            )}
        </div>
    );
};
