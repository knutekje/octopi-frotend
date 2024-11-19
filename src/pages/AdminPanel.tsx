import React, { useEffect, useState } from 'react';
import { authFetch } from '../utils/authFetch';
import { toast } from 'react-toastify';
import { TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

const AdminPanel: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await authFetch('/api/users');
                setUsers(data);
                setFilteredUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
                toast.error('Failed to load users.');
            }
        };

        fetchUsers();
    }, []);

    // Filter logic
    useEffect(() => {
        const filter = users.filter(
            (user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (!roleFilter || user.role === roleFilter)
        );
        setFilteredUsers(filter);
    }, [searchTerm, roleFilter, users]);

    return (
        <div>
            <h1>Admin Panel</h1>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                {/* Search Field */}
                <TextField
                    label="Search by Name or Email"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Role Dropdown */}
                <FormControl variant="outlined">
                    <InputLabel>Role</InputLabel>
                    <Select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        label="Role"
                    >
                        <MenuItem value="">All Roles</MenuItem>
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                </FormControl>
            </div>

            {/* User Table */}
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
