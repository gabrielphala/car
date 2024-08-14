import Authenticator from "../../views/auth/Authenticator"
import Header from "../header/Header"
import Sidenav from "../sidenav/Garage"

import "./info.css"

export default ({ children }: any) => {
  return (
    <Authenticator>
      <Header/>
      <Sidenav/>
      <div className="info">
        {children}
      </div>
    </Authenticator>
  )
}