import React, { useEffect, useState } from 'react';
import User from '../../types/models/User';
import Button from '../Button';
import TextInput from '../TextInput';
import { FormFields, initializeForm } from './formConfig';

interface P {
  handleSumbit: (userForm: FormFields, userId?: string) => Promise<void>;
  user?: User;
}

const UserForm = ({ handleSumbit, user }: P) => {
  const [userForm, setUserForm] = useState<FormFields>(initializeForm(user));

  useEffect(() => {
    setUserForm(initializeForm(user));
  }, [user]);

  return (
    <div className="m-10 flex w-full flex-nowrap items-center justify-evenly rounded-xl bg-indigo-700 p-5">
      <TextInput
        label="First name"
        value={userForm.firstName}
        onChange={(e) =>
          setUserForm((prev) => ({ ...prev, firstName: e.target.value }))
        }
      />
      <TextInput
        label="Last Name"
        value={userForm.lastName}
        onChange={(e) =>
          setUserForm((prev) => ({ ...prev, lastName: e.target.value }))
        }
      />
      <TextInput
        label="Email"
        value={userForm.email}
        onChange={(e) =>
          setUserForm((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <Button
        label={user ? 'Modifier' : 'Créer'}
        onClick={() => {
          handleSumbit(userForm, user?._id);
          initializeForm();
        }}
      />
    </div>
  );
};

export default UserForm;
