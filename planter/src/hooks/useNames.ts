import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export type Name = {
    id: number
    pl: string
    lat: string
}

export default function useNames() {
    const [plants, setNames] = useState<Name[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getNames() {
            const { data, error } = await supabase
                .from('plant')
                .select('id,name,name_lac')
            console.log(JSON.stringify(data, null, 2))
            if (error) {
                setError(error.message)
            } else if (data) {
                setNames(
                    data.map((plant: any) => ({
                        id: plant.id,
                        pl: plant.name,
                        lat: plant.name_lac
                    }))
                )
            }

            setLoading(false)
        }

        getNames()
    }, [])

    return { plants, error, loading }
}