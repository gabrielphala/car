export default () => {
  return (
    <div className="sidenav flex">
      <div className="sidenav__top">
        <div className="sidenav__top__item flex flex--a-center">
          <div className="sidenav__top__item__icon">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div className="sidenav__top__item__text">
            <p>Close</p>
          </div>
        </div>

        <div className="sidenav__top__item flex flex--a-center">
          <div className="sidenav__top__item__icon">
            <i className="fa fa-archive" aria-hidden="true"></i>
          </div>
          <div className="sidenav__top__item__text">
            <p>Requests</p>
          </div>
        </div>
      </div>

      <div className="sidenav__bottom">
        <div className="sidenav__bottom__item flex flex--a-center">
          <div className="sidenav__bottom__item__icon">
            <i className="fa fa-cog" aria-hidden="true"></i>
          </div>
          <div className="sidenav__bottom__item__text">
            <p>Settings</p>
          </div>
        </div>

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