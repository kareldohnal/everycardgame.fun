import React from 'react';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { LoginBar } from '../LoginBar/LoginBar';

import './AccountBar.css';

export const AccountBar = () => {
    return (
      <>
        <div className="accountbar">
          <LoginBar />
          <LanguageSwitch />
        </div>
      </>
    );
};