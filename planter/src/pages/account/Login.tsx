import { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import {supabase} from '@/utils/supabase';
import MessageWindow from '../popups/message-window';

export default function Login() { 
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [errorMessage, setErrorMessage] = useState("")

  async function handleLogin(e: React.FormEvent) {

    e.preventDefault()
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      if (error.message === 'Invalid login credentials') {
        setErrorMessage('Nieprawidłowy email lub hasło.');
      } else {
        setErrorMessage('Wystąpił błąd podczas logowania.');
      }
      return;
    }

    navigate('/account?view=profile')
  }


  return (
    <main className="login-main">
    <div className="form-container">
      <h2>Logowanie</h2>
      <form className="login-form" onSubmit={handleLogin}>
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
        <p>{errorMessage}</p>
        <button type="submit">Zaloguj</button>
      </form>
      <button onClick={() => navigate('/account?view=register')}>Rejestracja</button>
    </div>
    </main>
  );
}