import { Link } from "react-router-dom";
import Authenticator from "../auth/Authenticator"

import "./CheckoutSuccess.css"

export default () => {
  return (
    <Authenticator type="user">
      <Message />
    </Authenticator>
  )
}

function Message() {
  return (
    <div className="checkout-msg">
      <h1>Thank you</h1>
      <p>Your payment has been successful</p>
      <p>Please check your requests <span style={{ color: '#1e00ff' }}><Link to={`/u/requests`}>here</Link></span></p>
    </div>
  )
}