// This will be our root component
// which will hold the 
// navbar, tip, and music player components
import React from 'react';
import Background from './Background'
import AlbumArt from './AlbumArt'
import './style.css';
import albumCover from "./media/vultures.png";
//import AudioPlayer from './AudioPlayer/AudioPlayer'
import AudioPlayer from './AudioPlayer/AudioPlayer';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Background />
      <AlbumArt image={albumCover} />
      <AudioPlayer />
    </div>
  );
}

export default App;
