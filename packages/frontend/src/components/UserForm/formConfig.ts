import User from '../../types/models/User';

export type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
};

/**
 * Initilizes the form with empty values, or with the given user's properties.
 */
export const initializeForm: (user?: Partial<User>) => FormFields = (user) => ({
  firstName: '',
  lastName: '',
  email: '',
  ...user,
});
