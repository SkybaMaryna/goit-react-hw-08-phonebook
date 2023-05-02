import React from 'react';
import { Styledlink } from './Navigation.styled';

export const Navigation = () => {
  const navMap = [
    { path: '/', title: 'Home' },
    { path: '/register', title: 'Registration' },
    { path: '/login', title: 'Login' },
    { path: '/contacts', title: 'Contacts' },
  ];

  return (
    <nav>
      <ul>
        {navMap.map(({ path, title }) => (
          <li key={path}>
            <Styledlink to={path}>{title}</Styledlink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
