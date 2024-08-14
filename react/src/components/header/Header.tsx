import { useContext } from "react";
import "./header.css"
import { AuthContext } from "../../views/auth/Authenticator";

export default () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="header flex flex--a-center flex--j-space-between">
      <div>
        <p className="header__dash"><b>DASHBOARD</b></p>
        <p>{user.garage.name} | {user.garage.type}</p>
      </div>
      <p><b>{user.name}</b></p>
    </header>
  )
}