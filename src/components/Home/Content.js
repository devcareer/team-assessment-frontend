import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Assessments from '../../pages/Assessments';
import Dashboard from '../../pages/Dashboard';
import Notifications from '../../pages/Notifications';

const Content = () => {
  return (
    <Routes>
      {/* <Route path="/home/dashboard" element={<Dashboard />} />
      <Route path="/home/assessments" element={<Assessments />} />
      <Route path="/home/notifications" element={<Notifications />} /> */}
    </Routes>
  );
};

export default Content;
