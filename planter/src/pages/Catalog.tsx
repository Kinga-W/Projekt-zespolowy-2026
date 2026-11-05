import PlantWindow from "./catalog/PlantWindow";
import PlantPopup from "./catalog/PlantPopup";
import "@/styles/catalog-style.css";
import "@/styles/catalog-popup-style.css";
import "@/styles/catalog-responsive.css";
import "@/styles/catalog-search.css";
import usePlantSimple from '@/hooks/usePlantWindowData';
import { useState } from 'react';
import PlantSearch from "./catalog/PlantSearch";

export default function Catalog() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const { plants, error, loading } = usePlantSimple()
  const [keyword, setKeyword] = useState("");

  if (loading) console.log('Ładowanie roślin...');
  if (error) console.error(error);
  

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(keyword.toLowerCase()) ||
    plant.name_lac.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="catalog">
      <h2>Katalog roślin</h2>
      <div className="search-container">
        <PlantSearch placeholder="Szukaj..." keyword={keyword} setKeyword={setKeyword}></PlantSearch>
      </div>
      {filteredPlants.length > 0 ? (
        <div className="plant-container">
          {filteredPlants.map((plant) => (
            <PlantWindow key={plant.id} plant={plant} onExpand={() => setSelectedPlant(plant)}/>
          ))}
        </div>
        ):(
          <>
          <p className="no-plant">Poszukiwanej rośliny nie ma w katalogu.</p>
            <div className="plant-container">
              <pre> </pre>
            </div>
          </>
        )}
      {selectedPlant && (
        <PlantPopup plant={selectedPlant} onClose={() => setSelectedPlant(null)}/>
      )}
    </div>
  )
}
