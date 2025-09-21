import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{
            width: '100%',
            padding: '1rem 2rem',
            backgroundColor: '#222',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <h1 style={{ margin: 0, fontSize: '1.5rem' }}>My Project</h1>
            <nav>
                <a href="/" style={{ color: '#fff', marginRight: '1rem', textDecoration: 'none' }}>Home</a>
                <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
            </nav>
        </header>
    );
};

export default Header;