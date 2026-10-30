import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import PlantWindow from "./catalog/PlantWindow";
import "@/styles/catalog-style.css";

type Plant = {
  id: number
  name: string
}

export default function Catalog() {
  const [plants, setPlants] = useState<Plant[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getPlants() {
      const { data, error } = await supabase
        .from('plant')
        .select('id, name')

      if (error) {
        setError(error.message)
      } else {
        setPlants(data ?? [])
      }

      setLoading(false)
    }

    getPlants()
  }, [])

  if (loading) return <p>Loading plants...</p>
  if (error) return <p>Error loading plants: {error}</p>

  return (
    <div className="catalog">
      <h2>Katalog roślin</h2>
      <div className="search"></div>
      <div className="plant-container">
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
        <PlantWindow></PlantWindow>
      </div>
    </div>
  )
}
