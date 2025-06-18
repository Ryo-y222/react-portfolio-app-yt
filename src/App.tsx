import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Top from './pages/homes/top';
import Profile from './pages/homes/profile';
import Skill from './pages/homes/skill';
import Production from './pages/homes/production';
import Contact from './pages/homes/contact';
import Blog from './pages/homes/blog';
import Nomatch from './pages/nomatch';
import Header from './components/Header';
import Footer from './components/Footer';

const APP: React.FC = () => {
  return (
    <>
      <Header />
       <Routes>
         <Route path='' element={<Top />} />
         <Route path='/profile' element={<Profile />} />
         <Route path='/skill' element={<Skill />} />
         <Route path='/production' element={<Production />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='blog' element={<Blog />} />
         <Route path='*' element={<Nomatch />} />
       </Routes>
       <Footer />
    </>
  )
};

export default APP;
