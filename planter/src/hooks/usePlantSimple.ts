import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export type Plant = {
    id: number
    name: string
    name_lac: string
    type: string
    light: number
    watering_requirement: number
    soil: number[]
}

export default function usePlants() {
    const [plants, setPlants] = useState<Plant[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getPlants() {
            const { data, error } = await supabase
                .from('plant')
                .select('id,name,name_lac,light,watering_requirement,plant_type:type ( name ),plant_soil ( soil_id )')
            console.log(JSON.stringify(data, null, 2))
            if (error) {
                setError(error.message)
            } else if (data) {
                setPlants(
                    data.map((plant: any) => ({
                        id: plant.id,
                        name: plant.name,
                        name_lac: plant.name_lac,
                        type: plant.plant_type?.name ?? '',
                        light: plant.light,
                        watering_requirement: plant.watering_requirement,
                        soil: plant.plant_soil?.map((ps: any) => ps.soil_id) ?? [],
                    }))
                )
            }

            setLoading(false)
        }

        getPlants()
    }, [])

    return { plants, error, loading }
}