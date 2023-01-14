import React from 'react';
import nextId from 'react-id-generator';

const NotifyContext = React.createContext({
  NOTIFICATIONS: [],
});

export const NotifyContextProvider = props => {
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
    <NotifyContext.Provider value={{ NOTIFICATIONS }}>
      {props.children}
    </NotifyContext.Provider>
  );
};

export default NotifyContext;
