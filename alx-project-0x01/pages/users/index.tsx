import React from 'react';
import { UserProps } from '@/types';
import Header from '@/components/layout/Header';

const User: React.FC<UserProps> = ({ name, email }) => (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
        <Header />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default User;