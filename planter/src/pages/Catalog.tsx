import PlantWindow from "./catalog/PlantWindow";
import "@/styles/catalog-style.css";
import usePlantSimple from '@/hooks/usePlantSimple'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

type Plant = {
  id: number
  name: string
}

export default function Catalog() {
  const { plants, error, loading } = usePlantSimple()

  if (loading) return <p>Loading plants...</p>
  if (error) console.error(error)

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