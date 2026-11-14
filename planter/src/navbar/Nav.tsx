import BurgerMenu from "./BurgerMenu";
import { Link } from 'react-router-dom';
import logo from '/placeholder.png';

export default function Nav() {
    return(
        <>
            <nav className="desktop-nav">
                <div className="logo-container">
                    <Link to="/" className="logo-link"><img className="logo-img" src={logo} alt="logo" />PlantHelper</Link>
                </div>
                <div className="subsite-links">
                    <Link to="/">Strona główna</Link>
                    <Link to="/catalog">Katalog</Link>
                    <Link to="/planner">Planner</Link>
                    <Link to="/scanner">Skaner</Link>
                    <Link to="/account">Zaloguj się</Link>
                </div>
            </nav>

            <div className="mobile-nav">
                <div className="logo-container">
                    <Link to="/" className="logo-link"><img className="logo-img" src={logo} alt="logo" />PlantHelper</Link>
                </div>
                <BurgerMenu />
            </div>
        </>
    );
}