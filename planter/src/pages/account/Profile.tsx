import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from "react-router-dom";

export default function Profile() {
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <p>Profil</p>
      <button onClick={() => setSearchParams("view=login")}>Logowanie</button>
      <button onClick={() => setSearchParams("view=register")}>Rejestracja</button>
    </>
  );
}