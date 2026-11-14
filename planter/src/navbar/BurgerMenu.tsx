import { Link } from 'react-router-dom';
import { useState } from 'react';
import '@/styles/nav-style.css';

interface BurgerMenuProps {
  user: boolean;
}

export default function BurgerMenu({ user }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button
        className="burger-button"
        style={{
          backgroundColor: isOpen ? 'var(--color-main-dark)' : 'transparent'
        }}
        onClick={toggleMenu}
        aria-label="Otwórz menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <nav className="burger-dropdown">
            <Link to="/" onClick={toggleMenu} >Strona główna</Link>
            <Link to="/catalog" onClick={toggleMenu} >Katalog</Link>
            <Link to="/planner" onClick={toggleMenu} >Planner</Link>
            <Link to="/scanner" onClick={toggleMenu} >Skaner</Link>
            {user ? (
              <Link to="/account?view=profile">Twój profil</Link>
            ) : (
              <Link to="/account?view=login">Zaloguj się</Link>
            )}
        </nav>
      )}
    </div>
  );
}
