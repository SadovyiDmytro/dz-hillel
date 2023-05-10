import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/albums/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AlbumsList() {
  const [albums, setAlbums] = useState([]);

  const location = useLocation();
  const userId = location.pathname.split('/').pop();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.log(error));
  }, [userId]);

  return (
    <div>
      <h1>Альбоми користувача {userId}</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <Link to={`/photos/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhotosList() {
  const [photos, setPhotos] = useState([]);

  const location = useLocation();
  const albumId = location.pathname.split('/').pop();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.log(error));
  }, [albumId]);

  return (
    <div>
      <h1>Фото з альбому {albumId}</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UsersList />
        </Route>
        <Route path="/albums/:userId">
          <AlbumsList />
        </Route>
        <Route path="/photos/:albumId">
          <PhotosList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;