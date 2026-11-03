import PlantWindow from "./catalog/PlantWindow";
import PlantPopup from "./catalog/PlantPopup";
import "@/styles/catalog-style.css";
import usePlantSimple from '@/hooks/usePlantWindowData'
import { useState, useEffect } from 'react'

type Plant = {
  id: number
  name: string
}

export default function Catalog() {
  const { plants, error, loading } = usePlantSimple()
  const [selectedPlant, setSelectedPlant] = useState(null);

  if (loading) return <p>Loading plants...</p>
  if (error) console.error(error)

  return (
    <div className="catalog">
      <h2>Katalog roślin</h2>
      <div className="search"></div>
      <div className="plant-container">
        {plants.map((plant) => (
          <PlantWindow key={plant.id} plant={plant} onExpand={() => setSelectedPlant(plant)}/>
        ))}
      </div>
      {selectedPlant && (
        <PlantPopup plant={selectedPlant} onClose={() => setSelectedPlant(null)}/>
      )}
    </div>
  )
}