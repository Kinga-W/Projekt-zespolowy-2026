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
    water_freq: number
    drainage: number
    temp_min: number
    temp_max: number
    ph_min: number
    ph_max: number
    desc: string
    fert: string
    care_desc: string
    care_diff: number
    planting_time: string
    growing_time: string    
}

export default function usePlants() {
    const [plants, setPlants] = useState<Plant[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getPlants() {
            const { data, error } = await supabase
                .from('plant')
                .select(`id,name,name_lac,plant_type:type(name),photo_url,
                    light,light_type:light(name),watering_requirement,low_high:watering_requirement(name),plant_soil(soil_id,soil(id,name)),
                    watering_frequency,soil_drainage, temp_min, temp_max, ph_min, ph_max, description, fertilization, care_description, care_difficulty, planting_time, growing_time
                `)
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
                        url: plant.photo_url,
                        water_freq: plant.watering_frequency,
                        drainage: plant.soil_drainage,
                        temp_min: plant.temp_min,
                        temp_max: plant.temp_max,
                        ph_min: plant.ph_min,
                        ph_max: plant.ph_max,
                        desc: plant.description,
                        fert: plant.fertilization,
                        care_desc: plant.care_description,
                        care_diff: plant.care_difficulty,
                        planting_time: plant.planting_time,
                        growing_time: plant.growing_time
                    }))
                )
            }
            setLoading(false)
        }
        getPlants()
    }, [])

    return { plants, error, loading }
}