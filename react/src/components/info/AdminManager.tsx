import Authenticator from "../../views/auth/Authenticator"
import Header from "../header/AdminHeader"
import Sidenav from "../sidenav/Sidenav"

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