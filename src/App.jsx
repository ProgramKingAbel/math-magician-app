import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Quote, CalculatorPage } from './pages';
import { Layout } from './components';

const App = () => (
  <Routes>

    <Route path="/" element={<Layout />}>

      <Route index element={<Home />} />
      <Route path="CalculatorPage" element={<CalculatorPage />} />
      <Route path="Quote" element={<Quote />} />

    </Route>

  </Routes>

);

export default App;
