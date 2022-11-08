const formatName = (options: { firstName: string; lastName?: string }) =>
  `${options.firstName}${options?.lastName ? ' ' + options?.lastName : ''}`;

export default formatName;
