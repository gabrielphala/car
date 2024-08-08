import Authenticator from "../../views/auth/Authenticator"
import Header from "../header/UserHeader"
import Sidenav from "../sidenav/Sidenav"

import "./info.css"

export default ({ children }: any) => {
  return (
    <Authenticator type="user">
      <Header/>
      <Sidenav/>
      <div className="info">
        {children}
      </div>
    </Authenticator>
  )
}