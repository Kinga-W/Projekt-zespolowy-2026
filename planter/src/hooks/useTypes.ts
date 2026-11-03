
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

export type Type = {
    id: number
    type_name: string
}

export default function useTypes() {
    const [types, setTypes] = useState<Type[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getTypes() {
            const { data, error } = await supabase
                .from('plant_type')
                .select('id, name')

            if (error) {
                setError(error.message)
            } else if (data) {
                setTypes(
                    data.map((type) => ({
                        id: type.id,
                        type_name: type.name,
                    }))
                )
            }

            setLoading(false)
        }

        getTypes()
    }, [])

    return { types, error, loading }
}
