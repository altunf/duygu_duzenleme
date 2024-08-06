"use client";
import React, { useEffect, useState } from "react";

interface User {
  name: string;
  surname: string;
  username: string;
  email: string;
}

const fetchUsers = async () => {
  const response = await fetch("http://localhost:3001/users");
  const data = await response.json();
  return data;
};

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            {user.name} {user.surname} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
