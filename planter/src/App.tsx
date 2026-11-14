import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Scanner from './pages/Scanner';
import Catalog from './pages/Catalog';
import Planner from './pages/Planner';
import Nav from './navbar/Nav';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/account" element={<Account />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/scanner" element={<Scanner />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}