import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Calculator, Quote } from './pages';
import { Layout } from './components';

const App = () => (
  <Routes>

    <Route path="/" element={<Layout />}>

      <Route index element={<Home />} />
      <Route path="Calculator" element={<Calculator />} />
      <Route path="Quote" element={<Quote />} />

    </Route>

  </Routes>

);

export default App;
