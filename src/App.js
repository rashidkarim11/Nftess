import React from "react";
import Header from './components/Header';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css';
// import componenets for routing
import Home from './pages/Home';
import Browse from './pages/Browse';
import Artwork from './pages/Artwork';
import Shop from './pages/Shop';

const App = () => {
  return (
     <>
      <Router>
        <Header/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/artwork' element={<Artwork/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </Router>
      
     </>
  );
};

export default App;
