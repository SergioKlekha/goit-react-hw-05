import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigatiom.module.css';
import clsx from 'clsx';

const activeLink = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.navigationList}>
        <NavLink to="/" className={activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activeLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;