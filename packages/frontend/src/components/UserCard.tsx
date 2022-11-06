import React from 'react';
import formatName from '../helpers/formatName';
import User from '../types/models/User';

interface P extends User {}

const UserCard = ({ firstName, lastName, email }: P) => {
  return (
    <div className="rounded-xl bg-indigo-700 p-4 shadow-md">
      <div className="mb-3 flex h-10 w-10 justify-center rounded-full bg-blue-600 p-2 align-middle">
        <div className="material-symbols-outlined">person</div>
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
