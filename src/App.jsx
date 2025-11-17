import React from 'react';
import {Moon, Sparkles} from 'lucide-react';
import { Link, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard.jsx';
import Blog from './blog.jsx';
import './App.css';


function LandingPage() {
    return (
      <div className='container'>

          <main>
            <Moon size={80} className='moon' />
            <h1>Lunar Diary</h1>
            <p>Your emotions, written in the star.</p>
            <Link to='/dashboard' className='landing-btn'>Enter Diary <Sparkles /></Link>
          </main>
        
      </div>
    );
};

function LunarDiary() {
  return (
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/blog' element={<Blog />} />
      </Routes>
  );
}

export default LunarDiary;