import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'
import Home from './pages/Home';
import Account from './pages/Account';
import Scanner from './pages/Scanner';
import Catalog from './pages/Catalog';
import Planner from './pages/Planner';
import Nav from './navbar/Nav';
import logo from '/placeholder.png';
import {supabase} from './utils/supabase';
import { useAuth } from './hooks/useAuth'

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Ładowanie...</p>
  }

  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/account" element={<Account />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/scanner" element={<Scanner />} />
        </Routes>
      <footer>
        <p>Dziękujemy za odwiedzenie naszej strony!</p>
        <p>© 2026 PlantPlanner v0.1.1 Wszelkie prawa zastrzeżone.</p>
      </footer>
    </BrowserRouter>
  );
}