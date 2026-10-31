import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export default function getPlants() {
    const [plants, setPlants] = useState<{ id: number; name: string }[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getPlants() {
            try {
                const { data, error } = await supabase
                    .from('plant')
                    .select('id, name')

                if (error) throw error

                setPlants(data ?? [])
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : 'Coś poszło nie tak przy pobieraniu nazw roślin z bazy danych.'
                )
            } finally {
                setLoading(false)
            }
        }

        getPlants()
    }, [])

    return { plants, error, loading }
}
