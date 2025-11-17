import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import LunarDiary from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThoughtsProvider } from './ThoughtsContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThoughtsProvider>
        <LunarDiary />
      </ThoughtsProvider>
    </BrowserRouter>
  </StrictMode>,
)
