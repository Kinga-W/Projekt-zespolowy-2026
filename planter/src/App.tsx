import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Scanner from './pages/Scanner';
import Catalog from './pages/Catalog';
import Planner from './pages/Planner';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Strona Główna</Link>
          <Link to="/account">Moje Konto</Link>
          <Link to="/catalog">Katalog</Link>
          <Link to="/planner">Planner</Link>
          <Link to="/scanner">Skaner</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/account" element={<Account />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </BrowserRouter>
  );
}