import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Registration from './Components/Registration';
import NotFound from './Components/NotFound';
import Dashboard from './Components/Dashboard';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

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

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
