import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
// Routes
import Home from './views/Home/Home';
import About from './views/AboutUs/About';
import Questions from './views/Questions/Questions';
import Contuctus from './views/ContuctUs/Contactus';
import Faq from './views/Faq/Faq';
import Forbusiness from './views/ForBusiness/Forbusiness';
import OurPlaces from './views/OurPlaces/OurPlaces';
import Blogs from './views/Blogs/Blogs';
import Terms from './views/Terms/Terms';
import Privacy from './views/Privacy/Privacy';
import Blog from './views/Blog/Blog';


import Error from './views/ErrorPage/ErrorPage';



const App = () => {
  return (
    <Router>
      <span className="font-link">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/aboutus" element={<About />}/>
          <Route path="/questions" element={<Questions />}/>
          <Route path="/contactus" element={<Contuctus />}/>
          <Route path="/forbusiness" element={<Forbusiness />}/>
          <Route path="/FAQ" element={<Faq />}/>
          <Route path="/ourPlaces" element={<OurPlaces />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/blogs/:slug" element={<Blog />}/>
          <Route path="/terms" element={<Terms />}/>
          <Route path="/privacy" element={<Privacy />}/>
        
          <Route path="*" element={<Error />}/>
        </Routes>
        <div>
          {Footer()}
        </div>
      </span>
    </Router>
  );
}

export default App;
