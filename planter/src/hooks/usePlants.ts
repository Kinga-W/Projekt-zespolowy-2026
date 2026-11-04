import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export type Plant = {
    id: number
    name: string
    name_lac: string
    light: number
    watering_requirement: number
    watering_frequency: number
    temp_max: number
    soil_drainage: number
    ph_min: number
    fertilization: string
    care_difficulty: string
    temp_min: number
    ph_max: number
    type: number
}

export default function usePlants() {
    const [plants, setPlants] = useState<Plant[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getPlants() {
            const { data, error } = await supabase
                .from('plant')
                .select('*')

            if (error) {
                setError(error.message)
            } else {
                setPlants(data ?? [])
            }

            setLoading(false)
        }

        getPlants()
    }, [])

    return { plants, error, loading }
}
