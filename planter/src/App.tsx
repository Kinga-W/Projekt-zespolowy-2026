import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Scanner from './pages/Scanner';
import Catalog from './pages/Catalog';
import Planner from './pages/Planner';
import logo from './assets/placeholder.png';

import { useState, useEffect } from 'react';
import { supabase } from './utils/supabase';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/"><img src={logo} alt="logo" />Strona Główna</Link>
        <nav>
          <Link to="/catalog">Katalog</Link>
          <Link to="/planner">Planner</Link>
          <Link to="/scanner">Skaner</Link>
          <Link to="/account">Moje Konto</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/account" element={<Account />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </BrowserRouter>
  );
}