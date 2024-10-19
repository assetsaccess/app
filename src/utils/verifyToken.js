// import jwtDecode from 'jsonwebtoken';

// export const verifyToken = async (token) => {
//     try {

//         const decodedToken = jwtDecode(token);
//         const currentTime = Date.now() / 1000;

//         if (decodedToken.exp > currentTime) {
//             return decodedToken;
//         } else {
//             console.error('Token has expired');
//             return null;
//         }

//     } catch (error) {
//         console.error('Error verifying token:', error);
//         return null;
//     }
// };
import { jwtDecode } from 'jwt-decode';

export const verifyToken = async (token) => {
    try {
        const decodedToken = jwtDecode(token);  // Use jwtDecode as before
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp > currentTime) {
            return decodedToken;
        } else {
            console.error('Token has expired');
            return null;
        }

    } catch (error) {
        console.error('Error verifying token:', error);
        return null;
    }
};

