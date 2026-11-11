import { useState, useEffect} from 'react';
import { supabase } from '../utils/supabase';
import type { User } from '@supabase/supabase-js';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Pobranie aktualnego użytkownika
    async function getUser() {
      const { data, error } = await supabase.auth.getUser()

      if (error) {
        console.error(error)
      }

      setUser(data.user)
      setLoading(false)
    }

    getUser()

    // Nasłuchiwanie zmian stanu logowania
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    // Czyszczenie subskrypcji
    return () => subscription.unsubscribe()
  }, [])

  return { user, loading }
}