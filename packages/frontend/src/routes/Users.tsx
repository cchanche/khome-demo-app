import React, { useCallback, useEffect, useState } from 'react';
import Page from '../components/Page';
import User from '../types/models/User';
import { FormFields } from '../components/UserForm/formConfig';
import httpClient from '../helpers/httpClient';
import UserForm from '../components/UserForm/UserForm';
import UserCard from '../components/UserCard';
import formatName from '../helpers/formatName';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editUser, setEditUser] = useState<User | undefined>(undefined);

  const fetchUsers = useCallback(async () => {
    try {
      const { data } = await httpClient.get<User[]>('/users');
      setUsers(data);
    } catch {
      // handle fetching error
      // ex: toast message
    }
  }, []);

  /**
   * This effect will trigger on the first render.
   *
   * It is responsible for fetching the full user list
   *
   * TODO : use pagination to avoid slow browsing
   */
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSumbit = useCallback(
    async (userForm: FormFields, userId?: string) => {
      if (userId) {
        httpClient.put<void>('/users', {
          body: JSON.stringify({ _id: userId, ...userForm }),
        });
      } else {
        httpClient.post<User>('/users', { body: JSON.stringify(userForm) });
      }
      setEditUser(undefined);
      await fetchUsers();
    },
    [fetchUsers],
  );

  const handleEdit = useCallback((user: User) => {
    setEditUser(user);
  }, []);

  return (
    <Page>
      <div className="flex w-full flex-col">
        <div className="w-ull flex justify-end">
          <UserForm handleSumbit={handleSumbit} user={editUser} />
        </div>
        <div className="flex w-full flex-wrap">
          {users?.map((user) => (
            <div className="p-3" key={formatName(user)}>
              <UserCard {...user} handleOnEdit={handleEdit} />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Users;
