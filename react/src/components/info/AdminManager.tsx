import { useNavigate } from "react-router-dom"
import Authenticator from "../../views/auth/Authenticator"
import Header from "../header/AdminHeader"
import Sidenav from "../sidenav/Admin"

import "./info.css"
import { postWithAuth } from "../../helpers/http"

export default ({ children }: any) => {
  const nav = useNavigate();

  const signOut = () => {
    postWithAuth('/sign-out', {}, true)

    nav('/a/sign-in');
  }

  return (
    <Authenticator type="admin">
      <Header/>
      <Sidenav/>
      <div className="info">
        <div id="dropdown-menu" className="dropdown-menu">
          <p onClick={signOut}>Sign Out</p>
        </div>
        {children}
      </div>
    </Authenticator>
  )
}