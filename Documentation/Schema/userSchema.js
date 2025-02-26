export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      { name: 'username', type: 'string', title: 'Username' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'password', type: 'string', title: 'Password' },
      { name: 'role', type: 'string', title: 'Role', options: { list: ['admin', 'customer'] } },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
    ],
  };
  