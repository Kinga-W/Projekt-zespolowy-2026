import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

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
    <>
      <h1>Plant Catalog</h1>
      {plants.length === 0 ? (
        <p>No plants available.</p>
      ) : (
        <ul>
          {plants.map((plant) => (
            <li key={plant.id}>{plant.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}
