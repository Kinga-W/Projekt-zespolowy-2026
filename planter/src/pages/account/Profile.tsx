import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";
import {supabase} from '@/utils/supabase';
import { useProfile } from '@/hooks/useProfile';
import usePlants from '@/hooks/useFavPlantsByUser';
import PlantWindow from "../catalog/PlantWindow";
import PlantPopup from "../catalog/PlantPopup";

export default function Profile() {
  const path = "/catalog-photos/";
  const navigate = useNavigate()
  const [selectedPlant, setSelectedPlant] = useState(null);
  const { profile, loading } = useProfile();
  const { favPlants, loading: loadingFav } = usePlants(profile?.id);

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

  if (!profile){
    navigate('/account?view=login')
  }

  return (
    <main className="profile-main">
      <div className="profile-container">
        <div className="profile-details">
          <div className="profile-card">
            <img src={path + profile.photo_url}></img>
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
              {favPlants.length > 0 ? (
                <div className="fav-plant-container">
                  {favPlants.map((plant) => (
                    <PlantWindow key={plant.id} plant={plant} onExpand={() => setSelectedPlant(plant)}/>
                  ))}
                </div>
              ):(
                <>
                  <p>Brak ulubionych roślin</p>
                </>
              )}
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
      {selectedPlant && (
        <PlantPopup plant={selectedPlant} onClose={() => setSelectedPlant(null)}/>
      )}
    </main>
  );
}