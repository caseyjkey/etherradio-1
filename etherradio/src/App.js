// This will be our root component
// which will hold the 
// navbar, tip, and music player components
import React, { useState } from 'react';
import Background from './Background'
import AlbumArt from './AlbumArt'
import './style.css';
import albumCover from "./media/vultures.png";
//import AudioPlayer from './AudioPlayer/AudioPlayer'
import AudioPlayer from './AudioPlayer';


function App() {
  const [Window, setWindow] = useState([0, 0]);


  return (
    <div className="App">
      <header className="App-header">
          <h1>ETHERRADIO</h1>
			    <ul id="links"><li><a href="#" id="exchange">Exchange</a></li></ul>
      </header>
      <Background />
      <AlbumArt image={albumCover} />
      <AudioPlayer />
    </div>
  );
}

export default App;
