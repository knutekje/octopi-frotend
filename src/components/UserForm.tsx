import React, { useState } from 'react';

interface UserFormProps {
    user?: { name: string; email: string; role: string };
    onSubmit: (user: { name: string; email: string; role: string }) => void;
    onClose: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSubmit, onClose }) => {
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [role, setRole] = useState(user?.role || 'user');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, email, role });
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <h2>{user ? 'Edit User' : 'Add User'}</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default UserForm;
