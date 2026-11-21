import { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import {supabase} from '@/utils/supabase';

export default function Register() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2nd, setPassword2nd] = useState('')
  const [error, setError] = useState('')
  const [errorMessage, setErrorMessage] = useState("")

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setError('');
    setErrorMessage('');

    if (password !== password2nd) {
      setErrorMessage('Hasła muszą być identyczne.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Hasło musi mieć minimum 6 znaków.');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      if (
        error.message.toLowerCase().includes('already registered') ||
        error.message.toLowerCase().includes('already exists')
      ) {
      setErrorMessage('Ten adres e-mail jest już zajęty.');
      } else {
        setErrorMessage(error.message);
      }
      return;
    }

    if (!data.user) {
      setErrorMessage('Nie udało się utworzyć konta.');
      return;
    }

    const { error: profileError } = await supabase
      .from("profile")
      .insert({
        uuid: data.user.id,
        username: username,
    });

    if (profileError) {
      setErrorMessage('Nie udało się utworzyć profilu.');
      console.error(profileError);
      return;
    }

    navigate('/account?view=profile')
  }

  return (
    <main className="login-main">
    <div className="form-container">
      <h2>Rejestracja</h2>
      <form className="login-form" onSubmit={handleRegister}>
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
        <label>
          Powtórz hasło
          <input 
            type="password"
            placeholder="Powtórz hasło"
            value={password2nd}
            onChange={(e) => setPassword2nd(e.target.value)}
            required>
          </input>
        </label>
        <p>{errorMessage}</p>
        <button type="submit">Zarejestruj</button>
      </form>
      <button onClick={() => navigate('/account?view=login')}>Logowanie</button>
    </div>
    </main>
  )
}