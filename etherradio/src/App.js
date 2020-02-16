import React from 'react';
import Background from './Background'
import AlbumArt from './AlbumArt'
import './style.css';
import albumCover from "./media/vultures.png";
import AudioPlayer from './AudioPlayer'

function App() {
  return (
    <div className="App">
      <header>
          <h1>IPFS Music Player</h1>
      </header>
      <Background />
      <AlbumArt image={albumCover} />
      <AudioPlayer />
    </div>
  );
}

export default App;
