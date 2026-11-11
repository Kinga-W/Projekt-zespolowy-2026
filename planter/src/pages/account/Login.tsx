import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from "react-router-dom";

export default function Login() { 
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <p>Logowanie</p>
      <button onClick={() => setSearchParams("view=register")}>Rejestracja</button>
      <button onClick={() => setSearchParams("view=profile")}>Profil</button>
    </>
  );
}