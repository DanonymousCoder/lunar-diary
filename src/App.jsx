import React from 'react';
import {Moon, Sparkles} from 'lucide-react';
import './App.css'

function LunarDiary() {
  return (
    <div className='container'>

        <main>
          <Moon size={80} className='moon' />
          <h1>Lunar Diary</h1>
          <p>Your emotions, written in the star.</p>
          <button>Enter Diary <Sparkles /></button>
        </main>
      
    </div>
  );
}

export default LunarDiary;