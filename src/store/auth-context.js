import React from 'react';
import nextId from 'react-id-generator';

const AuthContext = React.createContext({
  NOTIFICATIONS: [
    {
      id: nextId(),
      message: 'You have completed an assessment.',
      link: 'View Score',
      date: '08/12/22',
      time: '11:59AM',
    },
    {
      id: nextId(),
      message: 'You have a pending assessment.',
      link: 'Go to Assessment',
      date: '08/12/22',
      time: '11:00AM',
    },
  ],
});

export const AuthContextProvider = props => {
  const NOTIFICATIONS = [
    {
      id: nextId(),
      message: 'You have completed an assessment.',
      link: 'View Score',
      date: '08/12/22',
      time: '11:59AM',
    },
    {
      id: nextId(),
      message: 'You have a pending assessment.',
      link: 'Go to Assessment',
      date: '08/12/22',
      time: '11:00AM',
    },
  ];

  return (
    <AuthContext.Provider value={{ NOTIFICATIONS }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
