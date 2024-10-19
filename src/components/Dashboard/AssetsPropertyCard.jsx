/* eslint-disable react/prop-types */
export const AssetsPropertyCard = ({ property }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            {/* Property Image */}
            <div className="relative">
                <img
                    src={property.image}
                    alt={property.title}
                    className="h-56 w-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-sm font-semibold py-1 px-2 rounded-lg">
                    ${property.price}
                </span>
            </div>

            {/* Property Details */}
            <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold text-gray-900 truncate">{property.title}</h3>
                <p className="text-sm text-gray-500">{property.location}</p>

                {/* Actions */}
                <div className="flex justify-between items-center mt-4">
                    <button className="text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                        View Details
                    </button>
                    <button className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                        Sell
                    </button>
                </div>
            </div>
        </div>
    );
};
