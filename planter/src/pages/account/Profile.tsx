import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";
import {supabase} from '@/utils/supabase';
import { useAuth } from '@/hooks/useAuth'

export default function Profile() {
  const navigate = useNavigate()
  const [, setSearchParams] = useSearchParams();
  const { user, loading } = useAuth();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Błąd wylogowania:', error.message);
      return;
    }

    navigate('/');
  }

  if (loading) {
    return <p>Ładowanie...</p>
  }

  return (
    <main>
      <p>Profil</p>
      <button onClick={handleLogout}>Wyloguj</button>
    </main>
  );
}