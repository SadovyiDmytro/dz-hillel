import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/albums/:albumId/photos" element={<PhotoList />} />
        {/* <Route path="/albums/" element={<PhotoList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;