import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  }

  return (
    <div className='users-list'>
      {users.map(user => (
        <div className='user-card' key={user.id}>
          <h2>{user.name}</h2>
          <Link to={`/albums?userId=${user.id}`}>Albums</Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
