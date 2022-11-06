import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import UserCard from '../components/UserCard';
import { userGetUsers } from '../hooks/api/users';
import User from '../types/models/User';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const getUsers = userGetUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Page>
      <div className="flex w-full flex-wrap">
        {users.map((user) => (
          <div className="p-3">
            <UserCard {...user} />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Users;
