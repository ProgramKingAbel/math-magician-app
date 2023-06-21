import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import {Home, Calculator, Quote} from './pages/Home';

const App = () => {
  return (
    <>
     
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Calculator' element={<Calculator />} />
      <Route path='/Quote' element={ <Quote />} />
      <Route />

      
      </Routes>
      </>
  )
  // <div>
  //   <h1>Welcome Math Magicians</h1>
  //   <div className="wrapper">
  //     <Calculator />
  //     <DisplayQuote />
  //   </div>
  // </div>
};

export default App;
