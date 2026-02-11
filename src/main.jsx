import React from 'react'
import ReactDOM from 'react-dom/client'
import AzetaNosotros from './components/AzetaNosotros'
import Cursor from './components/Cursor'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Cursor />
      <AzetaNosotros />
    </>
  </React.StrictMode>,
)
