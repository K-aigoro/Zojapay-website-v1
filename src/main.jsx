import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Hero from './components/hero';
import Navbar from './components/navBar';
import Solution from './components/solution';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Hero />
    <Solution />
    
    
  </React.StrictMode>,
)
