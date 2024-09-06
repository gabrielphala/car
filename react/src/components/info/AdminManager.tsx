import { Link, useNavigate } from "react-router-dom"
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
          <p><Link to="/a/garages">Garages</Link></p>
          <p><Link to="/a/employees">Employees</Link></p>
          <p><Link to="/a/users">Drivers</Link></p>
          <p><Link to="/a/requests">Requests</Link></p>
          <p><Link to="/a/payments">Payments</Link></p>
          <p><Link to="/a/services">Services</Link></p>
          <p onClick={signOut}>Sign Out</p>
        </div>
        {children}
      </div>
    </Authenticator>
  )
}