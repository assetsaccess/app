export const setAuthToken = (token) => {
    localStorage.setItem('assetAccessAuthToken', token);
};

export const getAuthToken = () => {
    return localStorage.getItem('assetAccessAuthToken');
};

export const removeAuthToken = () => {
    localStorage.removeItem('assetAccessAuthToken');
};

export const setAuthHeader = (headers = {}) => {
    const token = getAuthToken();
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
};