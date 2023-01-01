import { Route, Routes } from 'react-router-dom';
import nextId from 'react-id-generator';

import Signin from './pages/Signin';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Assessments from './pages/Assessments';
import Notifications from './pages/Notifications';
import Submit from './components/Questions/Submit';
import Profile from './components/Profile/Profile';
import RenderAssessments from './components/Questions/RenderAssessments';

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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="home" element={<Home notify={NOTIFICATIONS} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assessments" element={<Assessments />} />
          <Route
            path="notifications"
            element={<Notifications notify={NOTIFICATIONS} />}
          />
          <Route path="questions" element={<RenderAssessments />} />
          <Route path="submit" element={<Submit />} />
        </Route>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
