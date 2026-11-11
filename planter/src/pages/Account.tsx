import { useSearchParams } from "react-router-dom";
import Login from './account/Login';
import Register from './account/Register';
import Profile from './account/Profile';

export default function Account() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");

  return (
    <>
      {view == "login" && <Login />}
      {view == "register" && <Register />}
      {view == "profile" && <Profile />}
    </>
  )
}