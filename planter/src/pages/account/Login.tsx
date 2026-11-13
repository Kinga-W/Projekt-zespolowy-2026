import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";
import {supabase} from '@/utils/supabase';

export default function Login() { 
  const navigate = useNavigate()
  const [, setSearchParams] = useSearchParams();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError('Nieprawidłowy email lub hasło.')
      return
    }

    navigate('/account?view=profile')
  }


  return (
    <main className="login-main">
    <div className="login-form">
      <h2>Logowanie</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required>
          </input>
        </label>
        <label>
          Hasło
          <input 
            type="password"
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
    </main>
  );
}