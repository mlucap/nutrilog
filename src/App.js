import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Registration from './Components/Registration';
import NotFound from './Components/NotFound';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
