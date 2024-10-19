/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';

export const PropertyCard = ({ property }) => {
    return (
        <div className="bg-blue-800 p-4 max-w-sm mx-auto rounded-lg shadow-lg hover:shadow-xl transition m-4 duration-300">
            <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold text-white">{property.title}</h2>
                <div className="flex items-center text-gray-400">
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    <p>{property.location}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-yellow-400">
                        <CurrencyDollarIcon className="h-5 w-5" />
                        <span className="text-lg font-bold">{property.price}</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        View Details
                    </button>
                </div>
                <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                    Buy Now
                </button>
            </div>
        </div>
    );
};
// export const PropertyCard = ({ property }) => {
//     return (
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
//             {/* Property Image */}
//             <div className="relative">
//                 <img
//                     src={property.image}
//                     alt={property.title}
//                     className="h-56 w-full object-cover"
//                 />
//                 <span className="absolute top-2 right-2 bg-blue-600 text-white text-sm font-semibold py-1 px-2 rounded-lg">
//                     ${property.price}
//                 </span>
//             </div>

//             {/* Property Details */}
//             <div className="p-4 space-y-2">
//                 <h3 className="text-xl font-bold text-gray-900 truncate">{property.title}</h3>
//                 <p className="text-sm text-gray-500">{property.location}</p>

//                 {/* Buttons */}
//                 <div className="flex justify-between items-center mt-4">
//                     <button className="text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
//                         View Details
//                     </button>
//                     <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
//                         Buy Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
