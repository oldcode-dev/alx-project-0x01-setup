import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{
            width: '100%',
            padding: '1rem 0',
            background: '#f5f5f5',
            textAlign: 'center',
            borderTop: '1px solid #eaeaea'
        }}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;