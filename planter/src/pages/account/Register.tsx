import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from "react-router-dom";

export default function Register() {
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <p>Rejestracja</p>
      <button onClick={() => setSearchParams("view=login")}>Logowanie</button>
      <button onClick={() => setSearchParams("view=profile")}>Profil</button>
    </>
  )
}