import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";
import {supabase} from '@/utils/supabase';

export default function Register() {
  const navigate = useNavigate()
  const [, setSearchParams] = useSearchParams()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError('Nieprawidłowy email lub hasło.')
      return
    }

    const { error: profileError } = await supabase
      .from("profile")
      .insert({
        uuid: data.user.id,
        username: username,
    });

    navigate('/account?view=profile')
  }

  return (
    <main className="login-main">
    <div className="login-form">
      <h2>Rejestracja</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Zarejestruj</button>
      </form>
      <button onClick={() => setSearchParams("view=login")}>Logowanie</button>
    </div>
    </main>
  )
}