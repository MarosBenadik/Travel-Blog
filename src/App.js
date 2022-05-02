import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
// Routes
import Home from './views/Home/Home';
import About from './views/AboutUs/About';
import Questions from './views/Questions/Questions';
import Contuctus from './views/ContuctUs/Contactus';
import Faq from './views/Faq/Faq';
import Forbusiness from './views/ForBusiness/Forbusiness';

import Error from './views/ErrorPage/ErrorPage';

const App = () => {
  return (
    <Router>
      <div>
        {NavBar()}
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutus" element={<About />}/>
        <Route path="/questions" element={<Questions />}/>
        <Route path="/contactus" element={<Contuctus />}/>
        <Route path="/forbusiness" element={<Forbusiness />}/>
        <Route path="/FAQ" element={<Faq />}/>

        <Route path="*" element={<Error />}/>
      </Routes>
      <div>
        {Footer()}
      </div>
    </Router>
  );
}

export default App;
