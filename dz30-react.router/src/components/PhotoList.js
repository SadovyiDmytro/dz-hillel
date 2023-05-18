import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PhotoList.css';

function PhotoList() {
  const [photos, setPhotos] = useState([]);
  const { search } = useLocation();
  const albumId = new URLSearchParams(search).get('albumId');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(photos => setPhotos(photos));
  }, [albumId]);

  return (
    <div className='photo-list'>
      <h1>Photo List</h1>
      <ul className='photo-item'>
        {photos.map(photo => (
          <li className='item' key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotoList;
