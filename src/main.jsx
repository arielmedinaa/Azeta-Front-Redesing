import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AzetaInicio from './components/AzetaInicio'
import AzetaNosotros from './components/AzetaNosotros'
import AzetaEmpresas from './components/AzetaEmpresas'
import AzetaTrabaja from './components/AzetaTrabaja'
import AzetaRSE from './components/AzetaRSE'
import AzetaContacto from './components/AzetaContacto'
import Cursor from './components/Cursor'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Cursor />
        <Routes>
          <Route path="/" element={<AzetaInicio />} />
          <Route path="/nosotros" element={<AzetaNosotros />} />
          <Route path="/empresas" element={<AzetaEmpresas />} />
          <Route path="/trabaja" element={<AzetaTrabaja />} />
          <Route path="/rse" element={<AzetaRSE />} />
          <Route path="/contacto" element={<AzetaContacto />} />
        </Routes>
      </>
    </BrowserRouter>
  </React.StrictMode>,
)
