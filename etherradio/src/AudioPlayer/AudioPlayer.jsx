import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

import Vultures from '../media/Vultures.wav';
import Olympics from '../media/insomniac_olympics.flac';





export default function AudioPlayer() {

const [song, setSong] = useState(media[0]);


let media = [
  {
    title: 'Insomniac Olympics',
    artist: 'Blockhead',
    sources: {
      m4a: Olympics,
    },
    free: true,
  },
  {
    title: 'Vultures',
    artist: 'Pervsydell',
    sources: {
      m4a: Vultures
    },
    free: true,
  }
];

return (
  <div id="player">
      <audio ref={ref => this.player = ref} />

			<div id="jp_container_1" className="jp-audio">
			<div className="jp-type-single">

				<div className="jp-title">
				  <ul>
					<li>{song.title}</li>
					<li>{song.artist}</li>
				  </ul>
				</div>

				<div className="jp-gui jp-interface">

					<ul className="jp-controls">
					  <li><button className="jp-play" tabindex="1"><FaPlay /></button></li>
					  <li><button className="jp-pause" tabindex="1"><i className="fas fa-pause"></i></button></li>
					  <li><button className="jp-mute" tabindex="1" title="mute"><i className="fas fa-volume-mute"></i></button></li>
					  <li><button className="jp-unmute" tabindex="1" title="unmute"><i className="fas fa-volume-up"></i></button></li>
					</ul>

					<div className="jp-progress">
					  <div className="jp-seek-bar">
						<div className="jp-play-bar"></div>
					  </div>
					</div>

					<div className="jp-time-holder">
					  <div className="jp-current-time"></div>
					</div>

					<div className="jp-volume-bar">
					  <div className="jp-volume-bar-value"></div>
					</div>

					<div className="jp-no-solution">
					  <span>Update Required</span>
					  To play the media you need to update your browser to a recent version..
					</div>
				</div>
			</div>
			</div>
      </div>
);

export default AudioPlayer;