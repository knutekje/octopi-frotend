export const authFetch = async (url: string, options: RequestInit = {}) => {
    const token = localStorage.getItem('token');

    if (!token) {
        throw new Error('No token found');
    }

    const headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (response.status === 401) {
        // Handle unauthorized
        localStorage.removeItem('token');
        window.location.href = '/'; // Redirect to login
        throw new Error('Unauthorized - Redirecting to login');
    }

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Request failed');
    }

    return response.json();
};
