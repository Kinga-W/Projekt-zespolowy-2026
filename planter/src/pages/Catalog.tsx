import PlantWindow from "./catalog/PlantWindow";
import PlantSearch from "./catalog/PlantSearch";
import PlantFilter from "./catalog/PlantFilter";
import usePlantSimple from '@/hooks/usePlantWindowData'
import { useState, useEffect } from 'react'
import getPlantsFromDB from '../hooks/usePlants'
import "@/styles/catalog-style.css";
import usePlants from "../hooks/usePlants";



export default function Catalog() {
  const { plants, error, loading } = usePlants()

  if (loading) console.log('Ładowanie roślin...')
  if (error) console.error(error)

  const [keyword, setKeyword] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(keyword.toLowerCase()) ||
    plant.name_lac.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="catalog">
      <h2>Katalog roślin</h2>
      <div className="search-container">
        <div className="searchbar">
          <PlantSearch placeholder="Szukaj..." keyword={keyword} setKeyword={setKeyword}></PlantSearch>
        </div>
        <PlantFilter></PlantFilter>
      </div>
      <div className="plant-container">
        {filteredPlants.map((plant) => (
          <PlantWindow key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  )
}
