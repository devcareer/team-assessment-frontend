import { useState, useEffect, useContext } from 'react';

import { Route, Routes } from 'react-router-dom';

import Signin from './pages/Signin';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Assessments from './pages/Assessments';
import Notifications from './pages/Notifications';
import Submit from './components/Questions/Submit';
import Profile from './components/Profile/Profile';
import RenderAssessments from './components/Questions/RenderAssessments';
import PageNotFound from './pages/PageNotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';
import AuthContext from './store/auth-context';

function App() {
  const [loading, setLoading] = useState(false);
  const ctx = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<Signin />} />
          <Route path="home" element={<Home />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="assessments" element={<Assessments />} />
            <Route
              path="notifications"
              element={<Notifications notify={ctx.NOTIFICATIONS} />}
            />
            <Route path="questions" element={<RenderAssessments />} />
            <Route path="submit" element={<Submit />} />
          </Route>
          <Route path="profile" element={<Profile />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
