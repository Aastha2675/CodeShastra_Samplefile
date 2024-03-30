import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const videos = [
  {
    id: 1,
    title: "Introduction to React",
    url: "https://black-near-carp-356.mypinata.cloud/ipfs/QmQS6AmN4Hr6iisCtLueKRA2VRFG9F1A8Vjxt1JRXX6Mho?pinataGatewayToken=aRuUl6JVTe85Q4zVeettctJwcI_T9OdNxqduaIMUhqQXN1hiceApdSewljaO6PO9",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    description: "Learn the basics of React framework",
    duration: "10:30"
  },
  {
    id: 2,
    title: "React Hooks Tutorial",
    url: "https://black-near-carp-356.mypinata.cloud/ipfs/QmQS6AmN4Hr6iisCtLueKRA2VRFG9F1A8Vjxt1JRXX6Mho?pinataGatewayToken=aRuUl6JVTe85Q4zVeettctJwcI_T9OdNxqduaIMUhqQXN1hiceApdSewljaO6PO9",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    description: "Exploring React hooks like useState and useEffect",
    duration: "15:45"
  },
  // Add more video objects as needed
];

const VideoList = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      {videos.map(video => (
        <div key={video.id}>
          {selectedVideo && selectedVideo.id === video.id ? (
            <iframe 
              title={selectedVideo.title} 
              src={selectedVideo.url} 
              frameBorder="0" 
              width="560" 
              height="315" 
              allowFullScreen 
            />
          ) : (
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              onClick={() => handleClick(video)} 
              style={{ cursor: 'pointer' }} 
            />
          )}
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <p>Duration: {video.duration}</p>
        </div>
      ))}
    </div>
  );
};