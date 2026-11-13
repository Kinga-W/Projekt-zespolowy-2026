import { useSearchParams } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import Login from './account/Login';
import Register from './account/Register';
import Profile from './account/Profile';
import "@/styles/account-form.css";

export default function Account() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");

  const { user, loading } = useAuth();
  
  if (loading) {
    return <p>Ładowanie...</p>
  }

  //const { data } = await supabase.auth.getSession()

  return (
    <>
      {view == "login" && <Login />}
      {view == "register" && <Register />}
      {view == "profile" && user && <Profile />}
      {view == "profile" && !user && <Login />}
    </>
  )
}