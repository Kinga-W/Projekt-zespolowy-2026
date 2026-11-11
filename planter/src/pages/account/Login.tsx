import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";
import {supabase} from '@/utils/supabase';

export default function Login() { 
  const [, setSearchParams] = useSearchParams();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      username,
      password,
    })

    if (error) {
      setError('Nieprawidłowy email lub hasło.')
      return
    }

    const navigate = useNavigate()
    navigate('/account?view=profile')
  }


  return (
    <div className="login-popup">
      <h2>Logowanie</h2>
      <form onSubmit={handleLogin}>
        <label>
          Nazwa użytkownika
          <input 
            type="text"
            placeholder="Nazwa użytkownika"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required>
          </input>
        </label>
        <label>
          Hasło
          <input 
            type="text"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required>
          </input>
        </label>
        <button type="submit">Zaloguj</button>
      </form>
      <button onClick={() => setSearchParams("view=register")}>Rejestracja</button>
    </div>
  );
}