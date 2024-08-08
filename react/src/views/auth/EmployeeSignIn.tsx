import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postWithAuth } from "../../helpers/http";
import { getValueById } from "../../helpers/dom";

import "./auth.css"

export default () => {
  const [isAuth, setAuth] = useState(null) as any;

  const nav = useNavigate();

	const signIn = async (e: any) => {
		(e as PointerEvent).preventDefault();

    const res = await postWithAuth('/g/sign-in', {
			email: getValueById('email'),
			password: getValueById('password')
		}, true)

		setAuth(res.successful);

    // showError('auth', res.error)
	}

	useEffect(() => {
    if (isAuth) nav(`/g/requests`);;
  }, [isAuth]);

  return (
    <div className="auth flex">
      <main className="auth__main">
        <form className="auth__main__form" onSubmit={signIn}>
          <div className="auth__main__form__title">
            <h4>Sign in</h4>
            <p>Sign in to access your dashboard</p>
          </div>

          <div className="input">
            <input type="email" id="email" placeholder="Email address."  />
          </div>

          <div className="input pos--rel">
            <input type="password" id="password" placeholder="Password."  />
            <div className="input--forgot-pass pos--abs pos--vertical">
              <p><b>Forgot password</b></p>
            </div>
          </div>

          <button type="submit" className="btn btn--primary margin--top-2">Sign in</button>

          <div className="auth__main__form__footer flex flex--j-space-around margin--top-2">
            <p>Sign up instead</p>
            <p>Cookie policy</p>
            <p>Cookie policy</p>
          </div>
        </form>
      </main>
      <div className="auth__background">
        <div className="pos--abs pos--vertical">
          <img src="/illustration/serviceman.png" alt="" />
          <p>Always ready to help</p>
        </div>
      </div>
    </div>
  )
}