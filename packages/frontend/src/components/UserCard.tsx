import React from 'react';
import formatName from '../helpers/formatName';
import User from '../types/models/User';
import Button from './Button';

interface P extends User {
  handleOnEdit: (user: User) => void;
}

const UserCard = ({ _id, firstName, lastName, email, handleOnEdit }: P) => {
  return (
    <div className="rounded-xl bg-indigo-700 p-4 shadow-md">
      <div className="flex justify-between">
        <div className="mb-3 flex h-10 w-10 justify-center rounded-full bg-blue-600 p-2 align-middle">
          <div className="material-symbols-outlined">person</div>
        </div>
        <Button
          className="ml-3"
          label={<span className="material-symbols-outlined">edit</span>}
          onClick={() => handleOnEdit({ _id, firstName, lastName, email })}
        />
      </div>
      <div className="text-base font-bold text-indigo-100">
        {formatName({ firstName, lastName })}
      </div>
      <a
        href={`mailto:${email}`}
        className="text-sm font-semibold text-indigo-100 underline"
      >
        {email}
      </a>
    </div>
  );
};

export default UserCard;
