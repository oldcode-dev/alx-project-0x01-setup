import React from 'react';
import { UserProps } from '@/types';


const User: React.FC<UserProps> = ({ name, email }) => (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);

export default User;