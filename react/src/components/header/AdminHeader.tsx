import { useContext } from "react";
import { AuthContext } from "../../views/auth/Authenticator";
import "./header.css"

export default () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="header flex flex--a-center flex--j-space-between">
      <div>
        <p>DASHBOARD</p>
        <p>Administrator</p>
      </div>
      <p><b>{user.name}</b></p>
    </header>
  )
}