import React from 'react';
import Background from './Background'
import AlbumArt from './AlbumArt'
import './style.css';
import albumCover from "./media/vultures.png";
import AudioPlayer from './AudioPlayer'
import { FaCode } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <header>
          <h1 className="my-auto">IPFS Music Player</h1>
          <a href="https://www.caseyjkey.com/" className="my-auto"><FaCode /> <span>by Casey Key</span></a>
      </header>
      <Background />
      <AlbumArt image={albumCover} />
      <AudioPlayer />
    </div>
  );
}

export default App;
