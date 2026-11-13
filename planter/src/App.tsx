import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'
import Home from './pages/Home';
import Account from './pages/Account';
import Scanner from './pages/Scanner';
import Catalog from './pages/Catalog';
import Planner from './pages/Planner';
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
        <Link to="/"><img className="logo" src={logo} alt="logo" />Strona Główna</Link>
        <nav>
          <Link to="/catalog">Katalog</Link>
          <Link to="/planner">Planner</Link>
          <Link to="/scanner">Skaner</Link>
          {!loading && (
            user ? (
              <Link to="/account?view=profile">Twój profil</Link>
            ) : (
              <Link to="/account?view=login">Zaloguj się</Link>
            )
          )}
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