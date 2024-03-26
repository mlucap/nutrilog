import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Registration from './Components/Registration';
import NotFound from './Components/NotFound';
import Dashboard from './Components/Dashboard';
<<<<<<< HEAD
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LogIn />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard />} />
=======
import Navigation from './Components/Navigation';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/dashboard' element={<Dashboard />} />
>>>>>>> 29bc332a6363c381b245a4433e9b04b60d495365

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
