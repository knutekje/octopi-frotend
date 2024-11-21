export const authFetch = async (url: string, options: RequestInit = {}) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('No authentication token found. Please log in.');
    }

    const headers = new Headers(options.headers || {});
    headers.set('Authorization', `Bearer ${token}`);

    return fetch(url, {
        ...options,
        headers,
    });
};
