import Authenticator from "../../views/auth/Authenticator"
import Header from "../header/AdminHeader"
import Sidenav from "../sidenav/Admin"

import "./info.css"

export default ({ children }: any) => {
  return (
    <Authenticator type="admin">
      <Header/>
      <Sidenav/>
      <div className="info">
        {children}
      </div>
    </Authenticator>
  )
}