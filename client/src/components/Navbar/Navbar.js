import React from 'react';

import { Logo } from '../Logo/Logo';
import { AccountBar } from '../AccountBar/AccountBar';

import './Navbar.css';

export const Navbar = () => {
    return (
      <>
        <div className="navbar">
          <Logo />
          <AccountBar />
        </div>
      </>
    );
};