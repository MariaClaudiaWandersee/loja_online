import React from 'react';
import './App.css';
import Header from './navbar';
// import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Job from './components/job';
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes, withRouter } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <div className='container'>
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/" element={<About/>}/>
          <Route path="/contatos-millennium" element={<Contact/>}/>
          <Route path="/trabalhe-conosco" element={<Job/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;