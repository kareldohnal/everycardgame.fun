import React from 'react';
import { Text, LanguageContext } from '../../containers/Language';

export const Logo = () => {
    return (
      <>
        <div className="logo">
          <p className="primarytext">
            EveryCardGame.fun
          </p>
          <p className="secondarytext">
            <Text tid="logo_motto" />
          </p>
        </div>
      </>
    );
};