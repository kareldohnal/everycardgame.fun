import React from 'react';

import { Navbar } from '../../components/Navbar/Navbar';
import { GameCreator } from '../../components/GameCreator/GameCreator';
import { Footer } from '../../components/Footer/Footer';

import './Lobby.css';

export const Lobby = () => {
    return (
      <>
        <div className="lobby">
          <Navbar />
          <GameCreator />
          <Footer />
        </div>
      </>
    );
};