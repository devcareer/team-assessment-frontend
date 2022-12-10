import { Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from './pages/Home';
import NavBar from './components/Home/NavBar';
import SideBar from './components/Home/SideBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
