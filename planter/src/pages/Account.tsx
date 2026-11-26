import { useSearchParams } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import Login from './account/Login';
import Register from './account/Register';
import Profile from './account/Profile';
import "@/styles/account-form.css";
import "@/styles/profile-style.css";
import "@/styles/profile-responsive.css";

export default function Account() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");

  const { user, loading } = useAuth();
  
  if (loading) {
    return <p>Ładowanie...</p>
  }

  return (
    <>
      {view == "login" && <Login />}
      {view == "register" && <Register />}
      {view == "profile" && user && <Profile />}
      {view == "profile" && !user && <Login />}
    </>
  )
}