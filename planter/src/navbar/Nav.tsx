import BurgerMenu from "./BurgerMenu";
import { Link } from 'react-router-dom';
import logo from '/logo.png';
import {supabase} from '@/utils/supabase';
import { useAuth } from '@/hooks/useAuth';


export default function Nav() {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Ładowanie...</p>
  }

  return(
    <>
      <nav className="desktop-nav">
        <div className="logo-container">
          <Link to="/" className="logo-link"><img className="logo-img" src={logo} alt="logo" />PlantPlanner</Link>
        </div>
        <div className="subsite-links">
          <Link to="/">Strona główna</Link>
          <Link to="/catalog">Katalog</Link>
          <Link to="/planner">Planner</Link>
          <Link to="/scanner">Skaner</Link>
          {!loading && (
            user ? (
              <Link to="/account?view=profile">Twój profil</Link>
            ) : (
              <Link to="/account?view=login">Zaloguj się</Link>
            )
          )}
        </div>
      </nav>

      <div className="mobile-nav">
        <div className="logo-container">
          <Link to="/" className="logo-link"><img className="logo-img" src={logo} alt="logo" />PlantPlanner</Link>
        </div>
          <BurgerMenu user= {(user==null) ? false : true} />
      </div>
    </>
  );
}
