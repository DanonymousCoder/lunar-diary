import React from 'react';
import {Moon, Sparkles} from 'lucide-react';
import {Link} from 'react-router-dom';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './dashboard';

function LunarDiary() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<LandingPage />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default LunarDiary;