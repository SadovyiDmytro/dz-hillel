import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './AlbomList.css';

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const { search } = useLocation();
  const userId = new URLSearchParams(search).get('userId');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(albums => setAlbums(albums));
  }, [userId]);

  return (
    <div className='albom-list'>
      <h1>Album List</h1>
      <ul className='list-item'>
        {albums.map(album => (
          <li className='item-name' key={album.id}>
            {album.title}{' '}
            <Link className='item-link' to={`/albums/${album.id}/photos`}>Photos</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
