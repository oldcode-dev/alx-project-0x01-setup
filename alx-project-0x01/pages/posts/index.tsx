import React from 'react';
import { PostProps } from '@/types';


const Post: React.FC<PostProps> = ({ title, content, author, date }) => (
    <article style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
        <h2>{title}</h2>
        <p>{content}</p>
        <div style={{ fontSize: '0.9rem', color: '#555' }}>
            {author && <span>By {author}</span>}
            {date && <span> | {date}</span>}
        </div>
    </article>
);

export default Post;