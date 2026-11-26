import { useEffect, useState } from "react";
import { supabase } from '../utils/supabase';
import { useAuth } from "./useAuth";

export function useProfile() {
  const { user, loading: authLoading } = useAuth();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("profile")
        .select("*")
        .eq("uuid", user.id)
        .single();

      if (error) {
        console.error("Błąd pobierania profilu:", error);
        setProfile(null);
      } else {
        setProfile(data);
      }

      setLoading(false);
    };

    fetchProfile();
  }, [user, authLoading]);

  return { profile, loading };
}