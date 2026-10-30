import { useState, useEffect } from 'react'
import getPlantsFromDB from '../hooks/getPlantsFromDB'
import PlantWindow from "./catalog/PlantWindow";
import "@/styles/catalog-style.css";



export default function Catalog() {
  const { plants, error, loading } = getPlantsFromDB()

  if (loading) console.log('Ładowanie roślin...')
  if (error) console.error(error)

  console.log(plants)

  return (
    <div className="catalog">
      <h2>Katalog roślin</h2>
      <div className="search"></div>
      <div className="plant-container">
        {plants.map((plant) => (
          <PlantWindow key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  )
}
