import { Fragment } from 'react';
import Assessments from '../../pages/Assessments';
import Dashboard from '../../pages/Dashboard';
import Notifications from '../../pages/Notifications';

const Content = () => {
  return (
    <Fragment>
      <Dashboard />
      <Assessments />
      <Notifications />
    </Fragment>
  );
};

export default Content;
