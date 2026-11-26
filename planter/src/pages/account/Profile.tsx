import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";
import {supabase} from '@/utils/supabase';
import { useProfile } from '@/hooks/useProfile';
import usePlants from '@/hooks/useFavPlantsByUser';

export default function Profile() {
  const navigate = useNavigate()
  const [, setSearchParams] = useSearchParams();
  const { profile, loading } = useProfile();
  const { favPlants, loading: loadingFav } = usePlants(2);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Błąd wylogowania:', error.message);
      return;
    }
    navigate('/');
  }

  if (loading || loadingFav) {
    return <p>Ładowanie...</p>
  }

  return (
    <main className="profile-main">
      <div className="profile-container">
        <div className="profile-details">
          <div className="profile-card">
            <img src="/placeholder.png"></img>
            <div className="profile-info">
              <h3>{profile.username}</h3>
              <h4>Ulubione rośliny: {favPlants.length}</h4>
              <h4>Zapisane ogródki: 0</h4>
              <h4>Zapisane analizy: 0</h4>
            </div>
          </div>
          <div className="profile-options">
            <button className="profile-option-button" onClick={handleLogout}>Wyloguj</button>
          </div>
        </div>
        <div className="profile-saved">
          <details className="user-saved-section">
            <summary className="section-title">Ulubione rośliny</summary>
            <p className="section-content">Content</p>
          </details>
          <details className="user-saved-section">
            <summary className="section-title">Zapisane ogródki</summary>
            <p className="section-content">Content</p>
          </details>
          <details className="user-saved-section">
            <summary className="section-title">Zapisane analizy</summary>
            <p className="section-content">Content</p>
          </details>
        </div>
      </div>
    </main>
  );
}