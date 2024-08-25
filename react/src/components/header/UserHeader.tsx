import { useContext } from "react";
import "./header.css"
import { AuthContext } from "../../views/auth/Authenticator";
import { openMainDropdownMenu } from "./AdminHeader";

export default () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="header flex flex--a-center flex--j-space-between">
      <div>
        <p className="header__dash"><b>DASHBOARD</b></p>
        <p>Driver</p>
      </div>
      <div className="flex flex--a-center">
        <p className="margin--right-1"><b>{user.name}</b></p>
        <i className="fa-solid fa-bars" onClick={openMainDropdownMenu}></i>
      </div>
    </header>
  )
}