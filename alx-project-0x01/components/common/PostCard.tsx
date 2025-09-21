import React from 'react';
import { PostCardProps } from '@/interfaces';

const PostCard: React.FC<PostCardProps> = ({ title, author, date, content, imageUrl }) => (
    <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '400px',
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
        {imageUrl && (
            <img
                src={imageUrl}
                alt={title}
                style={{ width: '100%', borderRadius: '6px', marginBottom: '12px' }}
            />
        )}
        <h2 style={{ margin: '0 0 8px 0', fontSize: '1.25rem' }}>{title}</h2>
        <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '12px' }}>
            By {author} • {date}
        </div>
        <p style={{ margin: 0 }}>{content}</p>
    </div>
);

export default PostCard;