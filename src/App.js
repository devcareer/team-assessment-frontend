import { Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Assessments from './pages/Assessments';
import Notifications from './pages/Notifications';
import Tests from './components/Questions/Tests';

function App() {
  return (
    <div className="App">
      <Routes>
        (
        <Route exact path="/" element={<Signin />} />)
        <Route path="home" element={<Home />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="questions" element={<Tests />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
