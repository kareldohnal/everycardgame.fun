import React, { useContext, useEffect } from 'react';

import { languageOptions } from '../../lang';
import { LanguageContext } from '../../containers/Language';

import './LanguageSwitch.css';

export default function LanguageSwitch() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = e => userLanguageChange(e.target.value);

  useEffect(() => {
    let defaultLanguage = window.localStorage.getItem('rcml-lang');
    if (!defaultLanguage) {
      defaultLanguage = window.navigator.language.substring(0, 2);
    }
    userLanguageChange(defaultLanguage);
  }, [userLanguageChange]);

  return (
    <>
      <select
        className="languageswitch"
        onChange={handleLanguageChange}
        value={userLanguage}
      >
        {Object.entries(languageOptions).map(([id, name]) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
    </>
  );
};