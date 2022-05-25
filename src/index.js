import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Aliados from './pages/aliados/Aliados';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path='/aliados' element={<Aliados/>}></Route>

      </Routes>
  </BrowserRouter>
);


