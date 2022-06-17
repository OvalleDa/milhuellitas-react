import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Aliados from './pages/aliados/Aliados'
import Accesorios from './pages/aliados/Accesorios'
import Comida from './pages/aliados/Comida'
import Cuidados from './pages/aliados/Cuidados'
import Juguetes from './pages/aliados/Juguetes'
import NotFound from './pages/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Aliados />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/aliados" element={<Navigate to="/aliados/accesorios" replace />}></Route>
      <Route path="/aliados/accesorios" element={<Accesorios />}></Route>
      <Route path="/aliados/comida" element={<Comida />}></Route>
      <Route path="/aliados/cuidados" element={<Cuidados />}></Route>
      <Route path="/aliados/juguetes" element={<Juguetes />}></Route>
    </Routes>
  </BrowserRouter>
)
