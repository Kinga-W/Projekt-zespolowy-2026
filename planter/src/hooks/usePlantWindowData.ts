import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export type Plant = {
    id: number
    name: string
    name_lac: string
    type: string
    light: number
    light_alt: string
    water: number
    water_alt: string
    soil: {
        id: number
        name: string
    }
    url: string
}

export default function usePlants() {
    const [plants, setPlants] = useState<Plant[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getPlants() {
            const { data, error } = await supabase
                .from('plant')
                .select('id,name,name_lac,plant_type:type(name),light,light_type:light(name),watering_requirement,low_high:watering_requirement(name),plant_soil(soil_id,soil(id,name)),photo_url')
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
                        light_alt: plant.light_type?.name ?? '',
                        water: plant.watering_requirement,
                        water_alt: plant.low_high?.name ?? '',
                        soil: plant.plant_soil?.map((ps: any) => ({
                            id: ps.soil?.id,
                            name: ps.soil?.name
                        })) ?? [],
                        url: plant.photo_url
                    }))
                )
            }

            setLoading(false)
        }

        getPlants()
    }, [])

    return { plants, error, loading }
}