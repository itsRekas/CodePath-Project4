import React, { useState } from 'react';

const Discovery = ({ history, generateNew, updateBan, bandata }) => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [date, setDate] = useState('');
  const [mediaType, setMediaType] = useState('');
  const [videoSrc, setVideoSrc] = useState('');

  const fetchApodData = async () => {
    try {
      const response = await fetch('https://api.nasa.gov/planetary/apod?count=1&thumbs=true&api_key=lXUWD7fdnlR8Jigje2V0gAUAC8FpkDucFqdqrN57');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const apod = data[0];

      while (bandata.includes(apod.date) || apod.media_type === 'video') {
        fetchApodData(); 
        return;
      }

      setName(apod.title);
      setDate(apod.date);
      setMediaType(apod.media_type);
      setImg(apod.media_type === 'image' ? apod.url : '');
      setVideoSrc(apod.media_type === 'video' ? apod.url : '');

      const newEntry = {
        name: apod.title,
        img: apod.url,
        date: apod.date,
        mediaType: apod.media_type
      };

      generateNew(newEntry);
    } catch (error) {
      console.error('Error fetching APOD data:', error);
    }
  };

  const handleDiscover = () => {
    fetchApodData();
  };

  return (
    <div className='spaceSpace'>
        <div><h1>Discover Space</h1></div>
      <div className='Space'>
        {history.length > 0 ? (
          <>
            <h3>{name}</h3>
            <div>
                <img src={img} alt="Astronomy Picture of the Day" />
            </div>
            <button onClick={() => updateBan(date)}>{date}</button>
          </>
        ) : (
          <p>Click Discover to start</p>
        )}
      </div>
      <button onClick={handleDiscover}>Discover</button>
    </div>
  );
};

export default Discovery;
