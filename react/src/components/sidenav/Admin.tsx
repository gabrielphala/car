import { useNavigate } from "react-router-dom";
import { toggleSidenav } from "./Garage"
import { postWithAuth } from "../../helpers/http";

export default () => {
  const nav = useNavigate();

  const signOut = () => {
    postWithAuth('/sign-out', {}, true)

    nav('/a/sign-in');
  }

  return (
    <div className="sidenav flex">
      <div className="sidenav__top">
        <div className="sidenav__top__item flex flex--a-center" onClick={toggleSidenav}>
          <div className="sidenav__top__item__icon">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="sidenav__top__item__text">
            <p>Close</p>
          </div>
        </div>

        <div className="sidenav__top__item flex flex--a-center">
          <div className="sidenav__top__item__icon">
            <i className="fa fa-industry" aria-hidden="true"></i>
          </div>
          <div className="sidenav__top__item__text">
            <p>Requests</p>
          </div>
        </div>
      </div>

      <div className="sidenav__bottom">
        {/* <div className="sidenav__bottom__item flex flex--a-center">
          <div className="sidenav__bottom__item__icon">
            <i className="fa fa-cog" aria-hidden="true"></i>
          </div>
          <div className="sidenav__bottom__item__text">
            <p>Settings</p>
          </div>
        </div> */}

        <div className="sidenav__bottom__item flex flex--a-center">
          <div className="sidenav__bottom__item__icon">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </div>
          <div className="sidenav__bottom__item__text">
            <p>Sign out</p>
          </div>
        </div>
      </div>
    </div>
  )
}